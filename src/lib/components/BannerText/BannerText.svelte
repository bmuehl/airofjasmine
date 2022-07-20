<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let text: string

  const dispatch = createEventDispatcher()

  let chars: string[]
  $: chars = text.split('').map((char) => (char.trim() ? char : '&nbsp;'))
</script>

<span class="banner" aria-label={text} role="heading">
  {#each chars as char, index (index)}
    <span
      class="char"
      aria-hidden="true"
      style:animation-delay={`${index * 60}ms`}
      on:animationend={(e) => index === chars.length - 1 && dispatch('animationend', e)}
    >
      {@html char}
    </span>
  {/each}
</span>

<style lang="postcss">
  .banner {
    @apply text-5xl font-extralight;
  }

  .char {
    @apply inline-block animate-jump opacity-0;
  }
</style>
