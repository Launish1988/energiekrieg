// pages/login.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [selectedDeck, setSelectedDeck] = useState('default');

  const handleLogin = () => {
    if (!username) return;
    localStorage.setItem('energiekrieg_user', username);
    localStorage.setItem('energiekrieg_deck', selectedDeck);
    router.push('/');
  };

  return (
    <div className="login-container">
      <Image src="/logo.png" alt="Energiekrieg Logo" width={200} height={200} />

      <h1>Energiekrieg</h1>

      <input
        type="text"
        placeholder="Dein Benutzername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />

      <select
        value={selectedDeck}
        onChange={(e) => setSelectedDeck(e.target.value)}
        className="deck-select"
      >
        <option value="default">🗡 Klingenmeister</option>
        <option value="druid">🌿 Naturrufer</option>
        <option value="mage">🔥 Elementarwirker</option>
        <option value="priest">🖤 Schattenwirker</option>
        <option value="hunter">🏹 Waldhüter</option>
        <option value="paladin">⚔ Lichtwächter</option>
        <option value="warlock">💀 Seelenmeister</option>
        <option value="shaman">🌩 Sturmbeschwörer</option>
        <option value="rogue">🗡 Klingenläufer</option>
      </select>

      <button onClick={handleLogin} className="login-button">🔓 Einloggen & Loslegen</button>
    </div>
  );
};

export default Login;
