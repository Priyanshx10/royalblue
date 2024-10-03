import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  title: string
  description: string
  date: string
  image: string
}

export default function EventCard({ title, description, date, image }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{new Date(date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button>Learn More</Button>
      </CardContent>
    </Card>
  )
}