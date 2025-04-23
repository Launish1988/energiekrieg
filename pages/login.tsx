// pages/login.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
      // bei Erfolg weiterleiten zur Startseite
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.msg || "Login fehlgeschlagen");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/images/login-bg.jpg")` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-sm w-full text-center space-y-6">
        {/* Logo */}
        <Image
          src="/images/login-logo.png"
          alt="Energiekreig Logo"
          width={300}
          height={100}
          className="mx-auto"
        />

        {/* Fehlermeldung */}
        {error && (
          <p className="text-red-400 font-semibold">
            {error}
          </p>
        )}

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-yellow-600 hover:bg-yellow-700 font-bold text-black"
          >
            LOG IN
          </button>
        </form>

        {/* Link zur Registrierung */}
        <p className="text-white">
          Noch keinen Account?{" "}
          <a href="/register" className="underline text-yellow-400">
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
