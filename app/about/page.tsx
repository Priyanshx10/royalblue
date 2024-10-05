import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary">About Royal Blue</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/restaurant-interior.jpg"
            alt="Royal Blue Interior"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Royal Blue is a luxurious dining destination that combines exquisite cuisine with a stunning ambiance. Our passionate chefs create culinary masterpieces using only the finest, locally-sourced ingredients.
          </p>
          <p className="text-lg text-muted-foreground">
            With a focus on innovative flavors and impeccable presentation, we offer an unforgettable dining experience that caters to the most discerning palates.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Quality', 'Innovation', 'Sustainability'].map((value) => (
            <Card key={value}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}