import mongoose from 'mongoose'

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this menu item.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this menu item.'],
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this menu item.'],
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category for this menu item.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for this menu item.'],
  },
})

export default mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema)