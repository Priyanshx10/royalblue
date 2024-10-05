import { Suspense } from 'react'
import EventList from '../components/events/EventList'
import { getEvents } from '../lib/api'
import { Skeleton } from "@/components/ui/skeleton"

// Define the Event type
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

async function EventsContent() {
  const eventsData = await getEvents()

  const events: Event[] = eventsData.map(event => ({
    id: event._id,
    title: event.title || 'Untitled Event',
    description: event.description || 'No description available',
    date: event.date,
    image: event.image || '/placeholder-event-image.jpg'
  }))
  
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">No upcoming events at the moment.</p>
      </div>
    )
  }

  return <EventList events={events} />
}

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary">
        Upcoming Events
      </h1>
      <Suspense fallback={<EventsSkeleton />}>
        <EventsContent />
      </Suspense>
    </div>
  )
}

function EventsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-card rounded-lg shadow-md p-6 space-y-4">
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  )
}