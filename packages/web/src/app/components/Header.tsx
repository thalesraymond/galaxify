"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
    button: 'login' | 'register' | 'logout';
}

const Header = ({ button }: HeaderProps) => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    const getButton = () => {
        switch (button) {
            case 'login':
                return (
                    <Link
                        href="/login"
                        className="hidden md:inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-6 py-2 rounded-md hover:bg-cyan-500/40 transition-colors"
                    >
                        Login
                    </Link>
                );
            case 'register':
                return (
                    <Link
                        href="/register"
                        className="hidden md:inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-6 py-2 rounded-md hover:bg-cyan-500/40 transition-colors"
                    >
                        Register
                    </Link>
                );
            case 'logout':
                return (
                    <button
                        onClick={handleLogout}
                        className="hidden md:inline-block bg-red-500/20 text-red-300 border border-red-400/30 px-6 py-2 rounded-md hover:bg-red-500/40 transition-colors"
                    >
                        Logout
                    </button>
                );
        }
    };

    return (
        <header className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-orbitron text-white">
                    GALAXIFY
                </Link>
                {getButton()}
            </nav>
        </header>
    );
};

export default Header;
