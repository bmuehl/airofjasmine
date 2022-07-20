<script lang="ts">
  import BannerText from '$lib/components/BannerText/BannerText.svelte'
  import { fade } from 'svelte/transition'
  import albumCover from '$lib/assets/album-cover.webp?w=500&imagetools'

  let after = false
</script>

<div class="parent">
  <img alt="Album Cover" src={albumCover} class="rounded-xl mb-5" />

  <BannerText text="Air of Jasmine" on:animationend={() => (after = true)} />

  <div class="relative flex w-full justify-center">
    {#if after}
      <span class="-bottom-8 absolute text-lg" in:fade>coming soon</span>
    {/if}
  </div>
</div>

<style lang="postcss">
  .parent {
    @apply flex items-center justify-center flex-col h-full container mx-auto px-4;
  }
</style>
