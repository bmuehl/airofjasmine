<script lang="ts">
  export let text: string;

  let chars: string[];
  $: chars = text.split("").map((char) => (char.trim() ? char : "&nbsp;"));
</script>

<section class="container">
  <span class="banner" aria-label={text} role="heading">
    {#each chars as char, i}
      <span
        class="char"
        aria-hidden="true"
        style={`animation-delay: ${0.2 + i / 20}s`}
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
    display: inline-block;
    animation: move-text 0.5s ease-out forwards;
    transform: translateY(1em);
    opacity: 0;
  }

  @keyframes move-text {
    0% {
      transform: translateY(0.2em);
      opacity: 0;
    }

    50% {
      transform: translateY(-0.2em);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
