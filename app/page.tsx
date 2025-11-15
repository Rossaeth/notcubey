"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import styles from "./page.module.css";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  // Generate new question
  const newQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setAnswer("");
  };

  // Init MiniApp & start game
  useEffect(() => {
    const init = async () => {
      try {
        await sdk.actions.ready();
        setReady(true);
        newQuestion();
      } catch (err) {
        console.error("MiniApp SDK error:", err);
      }
    };
    init();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!ready || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameOver(true);
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [ready, gameOver]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameOver) return;

    if (parseInt(answer) === num1 + num2) {
      setScore((s) => s + 1);
      newQuestion();
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    newQuestion();
  };

  if (!ready) {
    return (
      <div className={styles.loading}>
        <p>Loading MiniApp...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Math Quick Game</h1>
        <p className={styles.subtitle}>
          Jawab sebanyak mungkin sebelum waktu habis!
        </p>

        {!gameOver ? (
          <div className={styles.gameBox}>
            <p className={styles.timer}>⏳ {timeLeft}s</p>
            <p className={styles.score}>⭐ {score}</p>

            <h2 className={styles.question}>
              {num1} + {num2} = ?
            </h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={styles.input}
                placeholder="Jawabanmu"
                autoFocus
              />
              <button className={styles.button} type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.gameOverBox}>
            <h2 className={styles.gameOver}>GAME OVER</h2>
            <p className={styles.finalScore}>Score: {score}</p>
            <button className={styles.restartButton} onClick={restartGame}>
              Restart Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
