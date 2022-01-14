<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { animationend } from "./animationend";

  export let text: string;

  const dispatch = createEventDispatcher();

  let chars: string[];
  $: chars = text.split("").map((char) => (char.trim() ? char : "&nbsp;"));
</script>

<section class="container">
  <span class="banner" aria-label={text} role="heading">
    {#each chars as char, index (index)}
      <span
        class="char"
        aria-hidden="true"
        style={`animation-delay: ${index * 60}ms`}
        use:animationend={{
          dispatch,
          condition: index === chars.length - 1,
        }}
      >
        {@html char}
      </span>
    {/each}
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
    @apply inline-block animate-jump opacity-0;
  }
</style>
