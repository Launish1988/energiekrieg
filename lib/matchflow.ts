// lib/matchflow.ts

import { useState, useEffect } from 'react';

type Player = 'player1' | 'player2';

export const useMatchFlow = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('player1');
  const [turnTime, setTurnTime] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTimerRunning && turnTime > 0) {
      timer = setTimeout(() => {
        setTurnTime((prev) => prev - 1);
      }, 1000);
    }

    if (turnTime === 0) {
      endTurn();
    }

    return () => clearTimeout(timer);
  }, [turnTime, isTimerRunning]);

  const endTurn = () => {
    setIsTimerRunning(false);
    setTurnTime(30);
    setCurrentPlayer((prev) => (prev === 'player1' ? 'player2' : 'player1'));
    setIsTimerRunning(true);
  };

  const manuallyEndTurn = () => {
    setIsTimerRunning(false);
    endTurn();
  };

  return {
    currentPlayer,
    turnTime,
    isTimerRunning,
    manuallyEndTurn,
  };
};
