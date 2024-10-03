import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this event.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this event.'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for this event.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for this event.'],
  },
})

export default mongoose.models.Event || mongoose.model('Event', EventSchema)