import gsap from 'gsap'

export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  })
}

export const staggerFadeInUp = (elements: HTMLElement[], stagger: number = 0.1) => {
  gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger,
    ease: 'power3.out',
  })
}

export const scaleIn = (element: HTMLElement, delay: number = 0) => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  })
}