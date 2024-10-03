import EventCard from './EventCard'

interface Event {
  id: string
  title: string
  description: string
  date: string
  image: string
}

interface EventListProps {
  events: Event[]
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}