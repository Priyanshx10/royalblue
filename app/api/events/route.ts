import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/mongodb'
import Event from '../../../models/Event'

export async function GET() {
  await dbConnect()

  try {
    const events = await Event.find({}).sort({ date: 1 })
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 })
  }
}