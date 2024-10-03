import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MenuItemProps {
  name: string
  description: string
  price: number
  image: string
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>${price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}