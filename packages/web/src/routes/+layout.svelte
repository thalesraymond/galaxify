<script>
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
    import "../app.css";
</script>

<div class="bg-background text-foreground min-h-screen">
    <div class="absolute top-4 right-4">
        <ThemeSwitcher />
    </div>
    <slot />
</div>
