"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Something went wrong");
            }

            router.push("/login");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="bg-blue-950 text-gray-200 antialiased">
            <div id="main-container" className="relative overflow-hidden min-h-screen stars">
                <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"></div>

                <div className="relative z-10">
                    <Header button="login" />

                    <main>
                        <section className="container mx-auto px-6 py-20 md:py-32 text-center">
                            <div className="max-w-md mx-auto hud-border rounded-lg bg-gray-900/40 backdrop-blur-sm p-8">
                                <h1 className="text-3xl font-bold font-orbitron text-white leading-tight mb-6">
                                    Join the Expedition
                                </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-cyan-400/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                                    <button
                                        type="submit"
                                        className="w-full bg-cyan-500 text-gray-900 font-bold px-10 py-3 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300 hud-glow"
                                    >
                                        Create Account
                                    </button>
                                </form>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}