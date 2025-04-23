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
    try {
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
    } catch (err) {
      setError("Netzwerkfehler");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-sm w-full text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/login-logo.png"
            alt="Energiekrieg Logo"
            width={300}
            height={150}
          />
        </div>

        {error && (
          <p className="text-red-400 font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label
              htmlFor="email"
              className="block text-gold uppercase text-sm mb-1"
            >
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
         
