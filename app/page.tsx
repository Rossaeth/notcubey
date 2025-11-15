"use client";

import { useState, useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import styles from "./page.module.css";

export default function Home() {
  const { context } = useMiniKit();

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

  // Start game on load
  useEffect(() => {
    newQuestion();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (gameOver) return;

    if (parseInt(answer) === num1 + num2) {
      setScore(score + 1);
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

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <h1 className={styles.title}>
          Math Quick Game
        </h1>

        <p className={styles.subtitle}>
          Hello {context?.user?.displayName || "Player"} 👋  
          <br />Jawab sebanyak mungkin sebelum waktu habis!
        </p>

        {!gameOver ? (
          <>
            <div className={styles.gameBox}>
              <p className={styles.timer}>⏳ Time: {timeLeft}s</p>
              <p className={styles.score}>⭐ Score: {score}</p>

              <h2 className={styles.question}>
                {num1} + {num2} = ?
              </h2>

              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={styles.input}
                  placeholder="Your answer"
                />
                <button className={styles.button} type="submit">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className={styles.gameOverBox}>
            <h2 className={styles.gameOver}>GAME OVER</h2>
            <p className={styles.finalScore}>Your Score: {score}</p>

            <button className={styles.restartButton} onClick={restartGame}>
              Restart Game
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
