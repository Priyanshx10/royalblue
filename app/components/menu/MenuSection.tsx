'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MenuItem from './MenuItem'

gsap.registerPlugin(ScrollTrigger)

interface MenuSectionProps {
  category: string
  items: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }[]
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-primary">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}