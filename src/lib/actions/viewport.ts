let intersectionObserver: IntersectionObserver

function initIntersectionObserver() {
  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? 'enter' : 'exit'
      entry.target.dispatchEvent(new CustomEvent(eventName))
    })
  })
}

export function viewport(node: HTMLElement) {
  if (!intersectionObserver) {
    initIntersectionObserver()
  }
  intersectionObserver.observe(node)
  return {
    destroy() {
      intersectionObserver.unobserve(node)
    }
  }
}
