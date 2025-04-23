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
