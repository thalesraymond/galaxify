<script lang="ts">
  import theme from '$lib/stores/themeStore';

  let showDialog = false;

  const darkThemes = ['catppuccin-dark', 'nord-dark', 'tokyo-night-dark', 'gruvbox-dark'];
  const lightThemes = ['catppuccin-latte', 'nord-light', 'tokyo-night-light', 'gruvbox-light'];

  let isDarkMode = !$theme.includes('light');

  function toggleDialog() {
    showDialog = !showDialog;
  }

  function selectTheme(selectedTheme: string) {
    theme.set(selectedTheme);
    isDarkMode = !selectedTheme.includes('light');
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
  <button on:click={toggleDialog}>
    <!-- Icon goes here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  </button>

  {#if showDialog}
    <div role="dialog" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
      <div class="p-4">
        <h3 class="font-bold mb-2">Color Theme</h3>
        <div class="flex items-center justify-between">
          <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          <button on:click={toggleMode} class="px-2 py-1 rounded-md text-sm">{isDarkMode ? '🌞' : '🌜'}</button>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold mb-2">Themes</h4>
          <div class="grid grid-cols-2 gap-2">
            {#each (isDarkMode ? darkThemes : lightThemes) as themeName}
              <button
                on:click={() => selectTheme(themeName)}
                class="px-2 py-1 rounded-md text-sm"
                class:font-bold={$theme === themeName}
              >
                {themeName.split('-').slice(0, -1).join(' ')}
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
