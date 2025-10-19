import { render, fireEvent } from '@testing-library/svelte';
import ThemeSwitcher from './ThemeSwitcher.svelte';
import { get } from 'svelte/store';
import theme from '$lib/stores/themeStore';
import { beforeEach, describe, it, expect, vi } from 'vitest';

// Mock the browser environment
vi.mock('$app/environment', () => ({
  browser: true,
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});


describe('ThemeSwitcher', () => {
  beforeEach(() => {
    // Reset theme and localStorage before each test
    localStorage.clear();
    theme.set('catppuccin-dark'); // Reset to default
  });

  it('should toggle the dialog on button click', async () => {
    const { getByRole, queryByRole } = render(ThemeSwitcher);
    const button = getByRole('button');

    expect(queryByRole('dialog')).toBeNull();

    await fireEvent.click(button);
    expect(queryByRole('dialog')).not.toBeNull();

    await fireEvent.click(button);
    expect(queryByRole('dialog')).toBeNull();
  });

  it('should switch between light and dark mode', async () => {
    const { getByRole, getByText } = render(ThemeSwitcher);
    const button = getByRole('button');
    await fireEvent.click(button);

    const modeToggle = getByText('🌞'); // From dark to light
    await fireEvent.click(modeToggle);

    expect(get(theme)).toBe('catppuccin-latte'); // First light theme
    expect(getByText('🌜')).not.toBeNull(); // Icon should change
  });

  it('should select a theme and save it to localStorage', async () => {
    const { getByRole, getByText } = render(ThemeSwitcher);
    const button = getByRole('button');
    await fireEvent.click(button);

    const nordThemeButton = getByText('nord');
    await fireEvent.click(nordThemeButton);

    expect(get(theme)).toBe('nord-dark');
    expect(window.localStorage.getItem('theme')).toBe('nord-dark');
  });
});
