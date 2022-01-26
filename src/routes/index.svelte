<script lang="ts">
  import BannerText from "$lib/components/BannerText/BannerText.svelte";
  import { fade } from "svelte/transition";
  import albumCover from "$lib/assets/album-cover.webp";

  let after = false;
</script>

<div class="parent">
  <img alt="Album Cover" src={albumCover} class="h-40 rounded-sm mb-5" />

  <BannerText text="Air of Jasmine" on:animationend={() => (after = true)} />

  <div class="relative flex w-full justify-center">
    {#if after}
      <span class="-bottom-6 absolute" in:fade>coming soon</span>
    {/if}
  </div>
</div>

<style lang="postcss">
  .parent {
    @apply flex items-center justify-center flex-col h-full;
  }
</style>
