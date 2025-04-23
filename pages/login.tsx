import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/");           // nach Login aufs Hauptmenü
    } else {
      const data = await res.json();
      setMsg(data.msg || "Fehler");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 pt-20">
      <h1 className="text-3xl font-bold">Log in</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
        <input
          type="email"
          placeholder="E-Mail"
          required
          className="p-2 rounded bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          required
          className="p-2 rounded bg-neutral-800"
          value={password}
          onChange={(e) => setPw(e.target.value)}
        />
        <button className="bg-amber-600 hover:bg-amber-700 p-2 rounded text-lg font-semibold">
          Einloggen
        </button>
        {msg && <p className="text-red-400 text-sm">{msg}</p>}
      </form>
    </div>
  );
}
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { login, getCurrentUser } from "@/lib/session";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [klass, setKlass] = useState<string>("warrior");

  /* Bereits eingeloggt? → Home */
  useEffect(() => {
    const u = getCurrentUser();
    if (u) router.replace("/");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = username.trim();
    if (!name) {
      alert("Bitte Benutzername eingeben");
      return;
    }
    // store username (LS + Cookie)
    login(name);
    // optionale Klassen‑Wahl in LS merken (für spätere Hero‑Skin)
    if (typeof window !== "undefined") localStorage.setItem("energiekrieg_class", klass);
    router.replace("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-slate-900 to-slate-800 p-4 text-center">
      <Image src="/logo.png" alt="Energiekrieg" width={180} height={180} priority />
      <h1 className="text-3xl font-bold text-yellow-400">Energiekrieg</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
          className="w-60 rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white focus:outline-none"
        />

        <select
          value={klass}
          onChange={(e) => setKlass(e.target.value)}
          className="w-60 rounded border border-slate-600 bg-slate-800 px-3 py-2 text-white focus:outline-none"
        >
          <option value="warrior">🛡 Klingenmeister</option>
          <option value="druid">🌿 Naturrufer</option>
          <option value="mage">🔥 Elementarwirker</option>
          <option value="priest">🖤 Schattenwirker</option>
          <option value="hunter">🏹 Waldhüter</option>
          <option value="paladin">✨ Lichtwächter</option>
          <option value="warlock">💀 Seelenmeister</option>
          <option value="shaman">🌩 Sturmbeschwörer</option>
          <option value="rogue">🗡 Klingenläufer</option>
        </select>

        <button
          type="submit"
          className="w-60 rounded bg-blue-700 px-4 py-2 text-lg font-semibold text-white shadow hover:bg-blue-600"
        >
          🔓 Einloggen & Loslegen
        </button>
      </form>
    </main>
  );
}
