import Link from 'next/link'
import { Button } from "@/components/ui/button"
import RestaurantScene from '../app/components/3d/RestaurantModel'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Welcome to Gourmet Haven</h1>
      <div className="h-[400px] md:h-[600px] w-full mb-12">
        <RestaurantScene />
      </div>
      <p className="text-center text-xl md:text-2xl mb-8 text-muted-foreground">
        Experience culinary excellence in a luxurious 3D environment
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild size="lg">
          <Link href="/menu">Explore Menu</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Make a Reservation</Link>
        </Button>
      </div>
    </div>
  )
}