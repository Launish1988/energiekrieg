import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg]           = useState("");
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      setMsg("Erfolgreich! Du kannst dich jetzt einloggen.");
      setTimeout(() => router.push("/login"), 1000);
    } else {
      const data = await res.json();
      setMsg(data.msg ?? "Fehler");
    }
  };

  return (
    <main className="flex flex-col items-center mt-10 gap-2">
      <h1 className="text-3xl font-bold">Account erstellen</h1>
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
          Registrieren
        </button>
      </form>
      {msg && <p className="text-sm mt-4">{msg}</p>}
      <a href="/login" className="underline text-sm mt-2">
        Schon da? → Einloggen
      </a>
    </main>
  );
}
