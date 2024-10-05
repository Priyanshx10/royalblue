import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Royal Blue</h3>
            <p className="text-sm">Experience culinary excellence in a luxurious setting.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-sm hover:underline">Menu</Link></li>
              <li><Link href="/events" className="text-sm hover:underline">Events</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          © {new Date().getFullYear()} Royal Blue. All rights reserved.
        </div>
      </div>
    </footer>
  )
}