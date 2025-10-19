<script lang="ts">
    import theme from "$lib/stores/themeStore";

    let showDialog = false;

    const darkThemes = ["catppuccin-dark", "nord-dark", "tokyo-night-dark", "gruvbox-dark"];
    const lightThemes = ["catppuccin-latte", "nord-light", "tokyo-night-light", "gruvbox-light"];

    let isDarkMode = !$theme.includes("light");

    function toggleDialog() {
        showDialog = !showDialog;
    }

    function selectTheme(selectedTheme: string) {
        theme.set(selectedTheme);
        isDarkMode = !selectedTheme.includes("light");
        showDialog = false;
    }

    function toggleMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            theme.set(darkThemes[0]);
        } else {
            theme.set(lightThemes[0]);
        }
    }
</script>

<div class="relative">
    <button
        on:click={toggleDialog}
        class="bg-[var(--accent)] hover:bg-[var(--primary)]/80 text-white rounded-md p-1 text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors duration-200"
    >
        <img src="/logo/galaxify.svg" alt="Theme switcher" class="h-5 w-5" />
    </button>

    {#if showDialog}
        <div
            role="dialog"
            class="absolute left-0 z-10 mt-2 w-64 bg-[var(--background)]/50 rounded-lg p-6 border border-[var(--foreground)]/20 shadow-lg backdrop-blur-sm"
        >
            <div class="flex items-center justify-between mb-4 pb-2 border-b-2 border-[var(--primary)]">
                <h3 class="text-xl font-bold" style="font-family: 'Orbitron', sans-serif;">THEME</h3>
                <button on:click={toggleMode} class="text-2xl">{isDarkMode ? "🌞" : "🌜"}</button>
            </div>

            <div class="space-y-4">
                {#each isDarkMode ? darkThemes : lightThemes as themeName}
                    <button
                        on:click={() => selectTheme(themeName)}
                        class="w-full text-left px-4 py-2 rounded-md transition-colors duration-200"
                        class:bg-primary={$theme === themeName}
                        class:text-white={$theme === themeName}
                        class:hover:bg-foreground-10={!($theme === themeName)}
                    >
                        {themeName
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                    </button>
                {/each}
            </div>
        </div>
    {/if}
</div>
