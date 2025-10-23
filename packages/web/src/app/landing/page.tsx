export default function LandingPage() {
    return (
        <div className="bg-blue-950 text-gray-200 antialiased">
            {/* Container principal com fundo de estrelas animado */}
            <div id="main-container" className="relative overflow-hidden min-h-screen stars">
                <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"></div>

                {/* Conteúdo da página */}
                <div className="relative z-10">
                    {/* Header */}
                    <header className="container mx-auto px-6 py-4">
                        <nav className="flex items-center justify-between">
                            <div className="text-2xl font-bold font-orbitron text-white">GALAXIFY</div>
                            <a
                                href="#"
                                className="hidden md:inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-6 py-2 rounded-md hover:bg-cyan-500/40 transition-colors"
                            >
                                Login
                            </a>
                        </nav>
                    </header>

                    {/* Main Content */}
                    <main>
                        {/* Hero Section */}
                        <section className="container mx-auto px-6 py-20 md:py-32 text-center">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white leading-tight mb-4">
                                    Transform Your Habits into{" "}
                                    <span className="text-cyan-400">Galactic Discoveries</span>.
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 mb-8">
                                    Stop the grind. Start the expedition. Galaxify turns your daily goals into an epic
                                    journey of space exploration, ship customization, and charting the unknown.
                                </p>
                                <a
                                    href="/register"
                                    className="inline-block bg-cyan-500 text-gray-900 font-bold px-10 py-4 rounded-lg text-lg transform hover:scale-105 transition-transform duration-300 hud-glow"
                                >
                                    Start Your Expedition, Captain!
                                </a>
                            </div>
                            {/* Visual simulado da nave ou mapa estelar */}
                            <div className="mt-16 max-w-3xl mx-auto p-4 hud-border rounded-lg bg-gray-900/40 backdrop-blur-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                    viewBox="0 0 800 400"
                                    fill="none"
                                >
                                    <defs>
                                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="rgba(0,255,255,0.2)" />
                                            <stop offset="100%" stopColor="rgba(0,255,255,0)" />
                                        </radialGradient>
                                    </defs>
                                    <circle cx="400" cy="200" r="150" fill="url(#grad1)" />
                                    {/* Linhas da HUD */}
                                    <path
                                        d="M100 200 H700 M400 50 V350"
                                        stroke="#06b6d4"
                                        strokeWidth="1"
                                        strokeOpacity="0.3"
                                    />
                                    <circle
                                        cx="400"
                                        cy="200"
                                        r="100"
                                        stroke="#06b6d4"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        strokeOpacity="0.5"
                                    />
                                    <circle
                                        cx="400"
                                        cy="200"
                                        r="180"
                                        stroke="#06b6d4"
                                        strokeWidth="1"
                                        strokeDasharray="8 8"
                                        strokeOpacity="0.3"
                                    />
                                    {/* Nave central */}
                                    <path d="M400 180 L420 220 L380 220 Z" fill="#f0f0f0" />
                                    <rect x="395" y="220" width="10" height="15" fill="#f0f0f0" />
                                    {/* Planetas/Alvos */}
                                    <circle cx="250" cy="150" r="8" fill="#0ea5e9" />
                                    <text x="265" y="155" fontFamily="Roboto" fontSize="12" fill="#e5e7eb">
                                        System X-1
                                    </text>
                                    <circle cx="550" cy="250" r="12" fill="#f59e0b" />
                                    <text x="565" y="255" fontFamily="Roboto" fontSize="12" fill="#e5e7eb">
                                        Gas Giant
                                    </text>
                                </svg>
                                <p className="text-center text-sm text-cyan-400/70 mt-2 font-orbitron tracking-widest">
                                    STARMAP: SOL-SECTOR-28A
                                </p>
                            </div>
                        </section>

                        {/* Como Funciona Section */}
                        <section id="how-it-works" className="py-20 bg-gray-900/20">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
                                        The Core Loop: From Task to Triumph
                                    </h2>
                                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                                        A simple, powerful cycle designed for sustained motivation.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {/* Card 1 */}
                                    <div className="hud-border rounded-lg p-6 bg-gray-900/40 text-center backdrop-blur-sm">
                                        <div className="flex justify-center mb-4">
                                            <svg
                                                className="w-16 h-16 text-cyan-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold font-orbitron text-white">
                                            1. Complete Tasks
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Log your habits, dailies, and to-dos as missions for your expedition.
                                        </p>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="hud-border rounded-lg p-6 bg-gray-900/40 text-center backdrop-blur-sm">
                                        <div className="flex justify-center mb-4">
                                            <svg
                                                className="w-16 h-16 text-cyan-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4l-3 3-3-3m5 12l-3-3-3 3"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold font-orbitron text-white">
                                            2. Earn Resources
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Gain themed materials like Star Alloys, Lore Fragments, and Fuel with every
                                            task completed.
                                        </p>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="hud-border rounded-lg p-6 bg-gray-900/40 text-center backdrop-blur-sm">
                                        <div className="flex justify-center mb-4">
                                            <svg
                                                className="w-16 h-16 text-cyan-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                <path d="M12 2v5.5"></path>
                                                <path d="M2 9.27l5 4.87"></path>
                                                <path d="M7 14.14l-1.18 6.88"></path>
                                                <path d="M12 17.77l6.18 3.25"></path>
                                                <path d="M17 14.14l1.18 6.88"></path>
                                                <path d="M22 9.27l-5 4.87"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold font-orbitron text-white">
                                            3. Craft Ship Parts
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Use your resources to build and upgrade your starship&apos;s components in
                                            the Shipyard.
                                        </p>
                                    </div>
                                    {/* Card 4 */}
                                    <div className="hud-border rounded-lg p-6 bg-gray-900/40 text-center backdrop-blur-sm">
                                        <div className="flex justify-center mb-4">
                                            <svg
                                                className="w-16 h-16 text-cyan-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold font-orbitron text-white">
                                            4. Make Discoveries
                                        </h3>
                                        <p className="text-gray-400 mt-2">
                                            Travel to new star systems, catalog alien life, and piece together the
                                            galaxy&apos;s hidden lore.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Diferenciais Section */}
                        <section id="features" className="py-20">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white">
                                        Engage Your Intrinsic Motivation
                                    </h2>
                                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                                        Galaxify is built around what truly drives us: creativity, curiosity, and
                                        connection.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 text-left">
                                    <div className="hud-border rounded-lg p-8 bg-gray-900/40 backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-3">
                                            Creativity: Engineer Your Legacy
                                        </h3>
                                        <p className="text-gray-300">
                                            Design a starship that&apos;s uniquely yours. Every component you craft offers
                                            strategic trade-offs, shaping your journey across the cosmos. Your ship is
                                            your progress, made tangible.
                                        </p>
                                    </div>
                                    <div className="hud-border rounded-lg p-8 bg-gray-900/40 backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-3">
                                            Curiosity: Discover a Living Universe
                                        </h3>
                                        <p className="text-gray-300">
                                            Explore procedurally generated star systems with billions of possibilities.
                                            Uncover alien life, ancient lore, and cosmic anomalies. No two expeditions
                                            are ever the same.
                                        </p>
                                    </div>
                                    <div className="hud-border rounded-lg p-8 bg-gray-900/40 backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold font-orbitron text-cyan-400 mb-3">
                                            Community: Forge Alliances
                                        </h3>
                                        <p className="text-gray-300">
                                            Embark on cooperative deep-space missions. Combine your crew&apos;s strengths to
                                            tackle galactic-scale challenges and share in the glory of discovery. True
                                            relatedness in your journey.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* For Developers Section */}
                        <section id="tech-stack" className="py-16 bg-gray-900/20">
                            <div className="container mx-auto px-6 text-center">
                                <div className="max-w-2xl mx-auto hud-border rounded-lg p-6 bg-gray-900/40 backdrop-blur-sm">
                                    <h4 className="font-orbitron text-lg text-cyan-400/80 tracking-widest">
                                        DEVELOPER LOG
                                    </h4>
                                    <p className="text-gray-400 mt-3">
                                        Powered by a robust MESN stack and engineered with Clean Architecture
                                        principles. Galaxify ensures a scalable, reliable, and secure platform for your
                                        interstellar journey.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="py-8 border-t border-cyan-400/10">
                        <div className="container mx-auto px-6 text-center text-gray-500">
                            <p>&copy; 2025 Galaxify Corps. All systems operational.</p>
                            <p className="text-sm mt-1">Chart your course. Build your legacy.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
