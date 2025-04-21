
import React from 'react';
import { useRouter } from 'next/router';
import { getCurrentUser, logoutUser } from '../lib/session';

const Home = () => {
  const router = useRouter();
  const username = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  const handleStartMatch = () => {
    router.push('/match');
  };

  const handleDeckBuilder = () => {
    router.push('/deck');
  };

  if (!username) return null;

  return (
    <div className="startscreen">
      <h1>Willkommen, {username} ⚔️</h1>

      <button onClick={handleStartMatch}>🎮 Freundschaftsspiel starten</button>
      <button onClick={handleDeckBuilder}>🛠 Deck bearbeiten</button>
      <button onClick={handleLogout}>🚪 Ausloggen</button>
    </div>
  );
};

export default Home;
