import { Suspense } from 'react'
import MenuSection from '../components/menu/MenuSection'
import { getMenuItems } from '../lib/api'
import { Skeleton } from "@/components/ui/skeleton"

export default async function MenuPage() {
  const menuItems = await getMenuItems()
  const categories = [...new Set(menuItems.map((item: { category: string }) => item.category))]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary">Our Exquisite Menu</h1>
      <Suspense fallback={<MenuSkeleton />}>
        {categories.map((category) => (
          <MenuSection
            key={category}
            category={category}
            items={menuItems.filter((item: { category: string }) => item.category === category)}
          />
        ))}
      </Suspense>
    </div>
  )
}

function MenuSkeleton() {
  return (
    <div className="space-y-10">
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          <Skeleton className="h-12 w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, j) => (
              <Skeleton key={j} className="h-64 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}