<svelte:head>
    <title>Dashboard | Galaxify</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="bg-gray-900 min-h-screen text-white font-sans p-4 sm:p-6 lg:p-8" style="font-family: 'Roboto', sans-serif;">
    <header class="flex justify-between items-center mb-8">
        <div class="flex items-center space-x-4">
            <img
                src="https://i.imgur.com/3g3g3g3.png"
                alt="Galaxify Logo"
                class="h-12 w-12 rounded-full border-2 border-purple-500"
            />
            <div>
                <h1 class="text-2xl font-bold" style="font-family: 'Orbitron', sans-serif;">G A L A X I F Y</h1>
                <p class="text-sm text-gray-400">Captain: Astro_J</p>
            </div>
        </div>
        <div class="text-right">
            <p class="text-lg font-semibold text-cyan-400" style="font-family: 'Orbitron', sans-serif;">
                Stardate: 2025.10.19
            </p>
            <p class="text-sm text-gray-400">System: Kepler-186f</p>
        </div>
    </header>

    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Habits Column -->
        <div class="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2
                class="text-xl font-bold mb-4 pb-2 border-b-2 border-purple-500"
                style="font-family: 'Orbitron', sans-serif;"
            >
                HABITS
            </h2>
            <div class="space-y-4">
                <!-- Positive Habit -->
                <div
                    class="flex items-center justify-between bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <div class="flex items-center">
                        <button
                            class="bg-green-500 hover:bg-green-400 text-white font-bold w-8 h-8 rounded-full text-xl mr-4"
                            >+</button
                        >
                        <div>
                            <p class="font-semibold">Read for 15 minutes</p>
                            <p class="text-xs text-gray-400">Research Data +10</p>
                        </div>
                    </div>
                    <span class="text-sm font-mono text-green-400">Streak: 12</span>
                </div>
                <!-- Negative Habit -->
                <div
                    class="flex items-center justify-between bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <div class="flex items-center">
                        <button
                            class="bg-red-500 hover:bg-red-400 text-white font-bold w-8 h-8 rounded-full text-xl mr-4"
                            >-</button
                        >
                        <div>
                            <p class="font-semibold">Mindless Scrolling</p>
                            <p class="text-xs text-gray-400">Cognitive Fog Nebula</p>
                        </div>
                    </div>
                </div>
                <!-- Positive Habit -->
                <div
                    class="flex items-center justify-between bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <div class="flex items-center">
                        <button
                            class="bg-green-500 hover:bg-green-400 text-white font-bold w-8 h-8 rounded-full text-xl mr-4"
                            >+</button
                        >
                        <div>
                            <p class="font-semibold">Morning Exercise</p>
                            <p class="text-xs text-gray-400">Bio-Fuel +5</p>
                        </div>
                    </div>
                    <span class="text-sm font-mono text-green-400">Streak: 3</span>
                </div>
            </div>
            <button
                class="mt-6 w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
            >
                Add New Habit
            </button>
        </div>

        <!-- Dailies Column -->
        <div class="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2
                class="text-xl font-bold mb-4 pb-2 border-b-2 border-cyan-400"
                style="font-family: 'Orbitron', sans-serif;"
            >
                DAILIES
            </h2>
            <div class="space-y-4">
                <div
                    class="flex items-center bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <input
                        type="checkbox"
                        class="form-checkbox h-6 w-6 bg-gray-800 border-cyan-400 text-cyan-500 rounded focus:ring-cyan-500 mr-4"
                    />
                    <div>
                        <p class="font-semibold">Check work emails</p>
                        <p class="text-xs text-gray-400">Alloy Plates +5</p>
                    </div>
                </div>
                <div
                    class="flex items-center bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <input
                        type="checkbox"
                        class="form-checkbox h-6 w-6 bg-gray-800 border-cyan-400 text-cyan-500 rounded focus:ring-cyan-500 mr-4"
                        checked
                    />
                    <div>
                        <p class="font-semibold text-gray-400 line-through">Tidy up workspace</p>
                        <p class="text-xs text-gray-500">Task Complete</p>
                    </div>
                </div>
                <div
                    class="flex items-center bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <input
                        type="checkbox"
                        class="form-checkbox h-6 w-6 bg-gray-800 border-cyan-400 text-cyan-500 rounded focus:ring-cyan-500 mr-4"
                    />
                    <div>
                        <p class="font-semibold">Plan tomorrow's tasks</p>
                        <p class="text-xs text-gray-400">Ship Fuel +3</p>
                    </div>
                </div>
            </div>
            <button
                class="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-md transition-colors duration-200"
            >
                Add New Daily
            </button>
        </div>

        <!-- To-Dos Column -->
        <div class="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2
                class="text-xl font-bold mb-4 pb-2 border-b-2 border-orange-500"
                style="font-family: 'Orbitron', sans-serif;"
            >
                TO-DOS
            </h2>
            <div class="space-y-4">
                <div
                    class="flex items-center bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <input
                        type="checkbox"
                        class="form-checkbox h-6 w-6 bg-gray-800 border-orange-500 text-orange-500 rounded focus:ring-orange-500 mr-4"
                    />
                    <div>
                        <p class="font-semibold">Finish Q3 report</p>
                        <p class="text-xs text-gray-400">Due: Tomorrow</p>
                    </div>
                </div>
                <div
                    class="flex items-center bg-gray-700/50 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                    <input
                        type="checkbox"
                        class="form-checkbox h-6 w-6 bg-gray-800 border-orange-500 text-orange-500 rounded focus:ring-orange-500 mr-4"
                    />
                    <div>
                        <p class="font-semibold">Schedule dentist appointment</p>
                        <p class="text-xs text-gray-400">Due: This Week</p>
                    </div>
                </div>
            </div>
            <button
                class="mt-6 w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
            >
                Add New To-Do
            </button>
        </div>
    </main>

    <footer class="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Galaxify Corps. Chart your course to a better you.</p>
    </footer>
</div>
