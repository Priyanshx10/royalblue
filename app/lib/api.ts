// app/lib/api.ts

import dbConnect from './mongodb'
import MenuItem from '../models/MenuItem'
import Event from '../models/Event'

export async function getMenuItems() {
  await dbConnect()
  const menuItems = await MenuItem.find({}).lean()
  return menuItems.map((item) => ({
    ...item,
    _id: item._id.toString(), // item._id is now of type ObjectId
  }))
}

export async function getEvents() {
  await dbConnect()
  const events = await Event.find({}).sort({ date: 1 }).lean()
  return events.map((event) => ({
    ...event,
    _id: event._id.toString(), 
    date: event.date.toISOString(),
  }))
}