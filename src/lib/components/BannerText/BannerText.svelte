<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { jumpIn } from "./transitions";

  export let text: string;

  const dispatch = createEventDispatcher();

  const startPlaying = (time: number) => {
    setTimeout(() => {
      start = !start;
      startPlaying(count % 2 === 0 ? 4000 : 850);
      count++;
    }, time);
  };

  onMount(() => startPlaying(500));

  let count = 0;
  let start = false;
  let chars: string[];
  $: chars = text.split("").map((char) => (char.trim() ? char : "&nbsp;"));
</script>

<section class="container">
  <span class="banner" aria-label={text} role="heading">
    {#if start}
      {#each chars as char, index (index)}
        <span
          class="char"
          aria-hidden="true"
          transition:jumpIn={{ delay: index * 60 }}
          on:introend={() => index === chars.length - 1 && dispatch("end")}
        >
          {@html char}
        </span>
      {/each}
    {/if}
  </span>
</section>

<style lang="postcss">
  .container {
    @apply flex items-center justify-center;
  }

  .banner {
    @apply text-4xl font-extralight;
  }

  .char {
    @apply inline-block;
  }
</style>
