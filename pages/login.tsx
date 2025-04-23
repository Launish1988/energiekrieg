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
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}
    >
      <form
        onSubmit={handleSubmit}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        {/* E-Mail-Feld */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          className="
            mb-4
            w-80
            px-3
            py-2
            bg-transparent
            border-2 border-gold-500
            text-gold-200
            placeholder-gold-200
            focus:outline-none
          "
        />

        {/* Passwort-Feld */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
          className="
            mb-6
            w-80
            px-3
            py-2
            bg-transparent
            border-2 border-gold-500
            text-gold-200
            placeholder-gold-200
            focus:outline-none
          "
        />

        {/* Login-Button */}
        <button
          type="submit"
          className="
            mb-4
            w-60
            px-4
            py-2
            bg-gold-600
            text-black
            font-bold
            rounded
            hover:bg-gold-700
          "
        >
          LOG IN
        </button>

        {/* Create-Account-Button */}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="
            w-60
            px-4
            py-2
            bg-gold-700
            text-black
            font-bold
            rounded
            hover:bg-gold-800
          "
        >
          CREATE ACCOUNT
        </button>

        {/* Fehlermeldung */}
        {error && (
          <p className="mt-4 text-red-400 font-medium text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
