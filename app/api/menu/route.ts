import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/mongodb'
import MenuItem from '../../../models/MenuItem'

export async function GET() {
  await dbConnect()

  try {
    const menuItems = await MenuItem.find({})
    return NextResponse.json(menuItems)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching menu items' }, { status: 500 })
  }
}