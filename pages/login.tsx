import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg]           = useState("");
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      router.push("/");               // → Hauptmenü (später deck.tsx o. Ä.)
    } else {
      const data = await res.json();
      setMsg(data.msg ?? "Login fehlgeschlagen");
    }
  };

  return (
    <main className="flex flex-col items-center mt-10 gap-2">
      <h1 className="text-3xl font-bold">Log in</h1>
      <form className="flex gap-2" onSubmit={submit}>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border px-2"
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border px-2"
          required
        />
        <button className="border px-3 py-1 bg-amber-600 text-white">
          Einloggen
        </button>
      </form>
      {msg && <p className="text-sm mt-4">{msg}</p>}
      <a href="/register" className="underline text-sm mt-2">
        Noch kein Account? → Registrieren
      </a>
    </main>
  );
}
