/**
 * v-scroll-in: toggles .is-in-view when element enters/leaves viewport (reverse on exit).
 * Defers adding the class so initial state (opacity: 0) paints before animating in.
 * Use with classes: scroll-in-up, scroll-in-fade, scroll-in-scale, scroll-in-left, scroll-in-right
 * Optional: data-scroll-delay="100" (ms) for stagger on enter only
 */
const VIEWPORT_CLASS = 'is-in-view'

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '0px 0px -6% 0px',
  threshold: 0.1,
}

let observer = null
const observed = new WeakSet()

function addClassAfterFirstPaint(el, delay) {
  const addClass = () => el.classList.add(VIEWPORT_CLASS)
  if (delay > 0) {
    el._scrollInTimeout = setTimeout(addClass, delay)
  } else {
    addClass()
  }
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        const delay = parseInt(el.dataset.scrollDelay, 10) || 0

        if (entry.isIntersecting) {
          if (el._scrollInTimeout) {
            clearTimeout(el._scrollInTimeout)
            el._scrollInTimeout = null
          }
          if (el._scrollInRaf) {
            cancelAnimationFrame(el._scrollInRaf)
            el._scrollInRaf = null
          }
          // Defer so the element paints with opacity: 0 first, then animate in
          el._scrollInRaf = requestAnimationFrame(() => {
            el._scrollInRaf = requestAnimationFrame(() => {
              el._scrollInRaf = null
              addClassAfterFirstPaint(el, delay)
            })
          })
        } else {
          if (el._scrollInTimeout) {
            clearTimeout(el._scrollInTimeout)
            el._scrollInTimeout = null
          }
          if (el._scrollInRaf) {
            cancelAnimationFrame(el._scrollInRaf)
            el._scrollInRaf = null
          }
          el.classList.remove(VIEWPORT_CLASS)
        }
      })
    }, OBSERVER_OPTIONS)
  }
  return observer
}

export const scrollIn = {
  mounted(el) {
    if (observed.has(el)) return
    observed.add(el)
    getObserver().observe(el)
  },
  unmounted(el) {
    if (el._scrollInTimeout) clearTimeout(el._scrollInTimeout)
    if (el._scrollInRaf) cancelAnimationFrame(el._scrollInRaf)
    observer?.unobserve(el)
    observed.delete(el)
  },
}
