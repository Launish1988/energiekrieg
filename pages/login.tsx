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
      <form onSubmit={handleSubmit} className="absolute inset-0">
        {/* E-Mail (Position nach Bild anpassen!) */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            absolute
            top-[35%] left-1/2 transform -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-white placeholder-transparent
            border-none focus:outline-none
          "
          placeholder=""
        />

        {/* Passwort */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            absolute
            top-[45%] left-1/2 transform -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-white placeholder-transparent
            border-none focus:outline-none
          "
          placeholder=""
        />

        {/* Log In Button */}
        <button
          type="submit"
          className="
            absolute
            top-[55%] left-1/2 transform -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        />

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="
            absolute
            top-[67%] left-1/2 transform -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        />

        {/* Fehlermeldung */}
        {error && (
          <p className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
