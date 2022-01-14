

export const animationend = (node: HTMLElement, { dispatch, condition }: { dispatch: <EventKey extends string>(type: EventKey, detail?: unknown) => void, condition?: boolean }): {
  update?: () => void,
  destroy?: () => void
} => {
  const dispatchEvent = () => {
    if (condition === undefined ? true : condition) {
      dispatch('end')
    }
  }
  node.addEventListener('animationend', dispatchEvent);
  return {
    destroy: () => node.removeEventListener('animationend', dispatchEvent)
  }
}
