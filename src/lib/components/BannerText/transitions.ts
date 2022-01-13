import { sineOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/types/runtime/transition';

export function jumpIn(_node: HTMLElement, params: { delay: number }): TransitionConfig {
  return {
    css: (t, u) => {
      return `
        transform: translateY(${u * Math.cos(t + 20) * 1.4}em);
        opacity: ${t};
      `;
    },
    easing: sineOut,
    delay: params.delay,
    duration: 500,
  };
}
