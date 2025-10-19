import { writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme =
    | "catppuccin-dark"
    | "nord-dark"
    | "tokyo-night-dark"
    | "gruvbox-dark"
    | "catppuccin-latte"
    | "nord-light"
    | "tokyo-night-light"
    | "gruvbox-light";

const defaultTheme: Theme = "catppuccin-dark";
const initialTheme = browser ? (window.localStorage.getItem("theme") as Theme) || defaultTheme : defaultTheme;

const theme = writable<string>(initialTheme);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("theme", value);
        document.body.setAttribute("data-theme", value);
    }
});

export default theme;
