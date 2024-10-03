import { Suspense } from 'react'
import EventList from '../../components/events/EventList'
import { getEvents } from '../../lib/api'
import { Skeleton } from "@/components/ui/skeleton"

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary">Upcoming Events</h1>
      <Suspense fallback={<EventsSkeleton />}>
        <EventList events={events} />
      </Suspense>
    </div>
  )
}

function EventsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-64 w-full" />
      ))}
    </div>
  )
}