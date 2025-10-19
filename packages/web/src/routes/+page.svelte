<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/dashboard');
  });
</script>

<svelte:head>
  <title>Galaxify</title>
</svelte:head>

<h1 class="text-2xl text-center p-8">Redirecting...</h1>
