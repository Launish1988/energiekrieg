// pages/login.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.msg || "Login fehlgeschlagen");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-sm w-full text-center space-y-6">
        {/* Logo */}
        <img
          src="/images/login-logo.png"
          alt="Energiekrieg Logo"
          className="mx-auto mb-4 w-64"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded text-black"
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded text-black"
            required
          />
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 rounded font-bold"
          >
            LOG IN
          </button>
        </form>

        <p className="text-sm">
          Noch keinen Account?{" "}
          <a href="/register" className="underline text-yellow-500">
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
