// pages/register.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setSuccess("Account erfolgreich angelegt! Du wirst in 2 Sek. weitergeleitet…");
      // nach 2 Sekunden zurück zur Login-Seite
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      const data = await res.json();
      setError(data.msg || "Registrierung fehlgeschlagen");
    }
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}
    >
      <form onSubmit={handleSubmit} className="relative w-full h-full">
        {/* E-Mail */}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="absolute top-[35%] left-1/2 transform -translate-x-1/2
                     w-[70%] max-w-xs h-10 bg-transparent text-white
                     border-none focus:outline-none"
        />

        {/* Passwort */}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="absolute top-[45%] left-1/2 transform -translate-x-1/2
                     w-[70%] max-w-xs h-10 bg-transparent text-white
                     border-none focus:outline-none"
        />

        {/* Register-Button */}
        <button
          type="submit"
          className="absolute top-[55%] left-1/2 transform -translate-x-1/2
                     w-[60%] max-w-xs h-12 bg-transparent border-none
                     cursor-pointer"
        />

        {/* Zurück zum Login */}
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="absolute top-[67%] left-1/2 transform -translate-x-1/2
                     w-[60%] max-w-xs h-12 bg-transparent border-none
                     cursor-pointer"
        />

        {error && (
          <p className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-red-400">
            {error}
          </p>
        )}
        {success && (
          <p className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-green-300">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}
