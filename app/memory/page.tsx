"use client";
import { useState, useEffect } from "react";
import styles from "./memory.module.css";

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

const createShuffledCards = () => {
  const values = ["🍎", "🍌", "🍇", "🍒", "🍉", "🍍"];
  const cards: Card[] = [...values, ...values].map((value, index) => ({
    id: index,
    value,
    flipped: false,
    matched: false,
  }));

  // Shuffle (Fisher–Yates)
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
};

export default function MemoryMatch() {
  const [cards, setCards] = useState<Card[]>(createShuffledCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleFlip = (index: number) => {
    if (cards[index].flipped || cards[index].matched || flippedCards.length === 2) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedCards((prev) => [...prev, index]);
  };

  // Match logic
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [a, b] = flippedCards;
      setMoves((prev) => prev + 1);

      if (cards[a].value === cards[b].value) {
        const newCards = [...cards];
        newCards[a].matched = true;
        newCards[b].matched = true;
        setCards(newCards);
        setMatches((prev) => prev + 1);
        setFlippedCards([]);
      } else {
        // delay then flip back
        const t = setTimeout(() => {
          const newCards = [...cards];
          newCards[a].flipped = false;
          newCards[b].flipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 800);
        return () => clearTimeout(t);
      }
    }
    // NOTE: include cards in deps to reflect current flipped state
  }, [flippedCards, cards]);

  // Check game over
  useEffect(() => {
    if (matches === cards.length / 2) {
      setGameOver(true);
    }
  }, [matches, cards]);

  const restartGame = () => {
    setCards(createShuffledCards());
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>🧠 Memory Match</h1>
        <p className={styles.subtitle}>Cocokkan semua pasangan kartu — klik untuk membalik!</p>

        <div className={styles.stats}>
          <div>Moves: <strong>{moves}</strong></div>
          <div>Matches: <strong>{matches}</strong></div>
        </div>

        <div className={styles.grid}>
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleFlip(card.id)}
              className={`${styles.card} ${card.flipped || card.matched ? styles.flipped : ""} ${card.matched ? styles.matched : ""}`}
              aria-label={`Card ${card.id}`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront} />
                <div className={styles.cardBack}>
                  <span className={styles.emoji}>{card.value}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {gameOver && (
          <div className={styles.gameOverBox}>
            <h2 className={styles.gameOver}>🎉 You Win!</h2>
            <p className={styles.finalScore}>Total moves: {moves}</p>
            <button className={styles.restartButton} onClick={restartGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
