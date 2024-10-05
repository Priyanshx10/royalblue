/* eslint-disable @next/next/no-img-element */
import { Suspense, use } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import React from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string ;
  category: string;
}

async function getMenuItems(): Promise<MenuItem[]> {
  // In a real application, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      id: '1',
      name: 'Classic Burger',
      description: 'A thick, juicy beef patty, flame-grilled to perfection, topped with melted cheddar, fresh lettuce, tomatoes, onions, pickles, and a dollop of our special house sauce, all nestled in a toasted sesame seed bun.',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',  // Unsplash direct image URL
      category: 'Main Courses',
    },
    {
      id: '2',
      name: 'Veggie Burger',
      description: 'A savory plant-based patty loaded with creamy avocado slices, tangy pickles, fresh lettuce, and a zesty vegan aioli spread, all served on a toasted whole-grain bun.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1661529515567-dcb300f41da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2dpZSUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',  // Unsplash direct image URL
      category: 'Main Courses',
    },
    {
      id: '3',
      name: 'Caesar Salad',
      description: 'A bed of crisp romaine lettuce tossed with our rich Caesar dressing, garnished with house-made croutons, parmesan shavings, and a sprinkle of black pepper.',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1670237735381-ac5c7fa72c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2VyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D',  // Unsplash direct image URL
      category: 'Starters',
    },
    {
      id: '4',
      name: 'French Fries',
      description: 'Golden, crispy French fries seasoned to perfection with a hint of garlic and rosemary, served with a side of ketchup or our signature spicy mayo.',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZyZW5jaCUyMEZyaWVzfGVufDB8fDB8fHww',  // Unsplash direct image URL
      category: 'Sides',
    },
    {
      id: '5',
      name: 'Chocolate Brownie',
      description: 'Indulge in a rich, fudgy chocolate brownie, served warm with a scoop of creamy vanilla ice cream and a drizzle of chocolate sauce.',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1599785209707-28fcf45a6c25',  // Unsplash direct image URL
      category: 'Desserts',
    },
    {
      id: '6',
      name: 'Grilled Chicken',
      description: 'Succulent, marinated chicken breast grilled to perfection, served with a medley of roasted vegetables and a side of garlic herb butter sauce.',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1645066803665-d16a79a21566?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Unsplash direct image URL
      category: 'Main Courses',
    },
    {
      id: '7',
      name: 'Greek Salad',
      description: 'A refreshing mix of cucumbers, tomatoes, kalamata olives, and feta cheese, dressed in a lemon-oregano vinaigrette and served with crispy pita bread.',
      price: 8.99,
      image: 'https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Unsplash direct image URL
      category: 'Starters',
    },
    {
      id: '8',
      name: 'Sweet Potato Fries',
      description: 'Crispy on the outside, tender on the inside, these sweet potato fries come with a side of spicy mayo for a little extra kick.',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1609222094635-05954e29229a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3dlZXQlMjBQb3RhdG8lMjBGcmllc3xlbnwwfHwwfHx8MA%3D%3D',  // Unsplash direct image URL
      category: 'Sides',
    },
    {
      id: '9',
      name: 'Cheesecake',
      description: 'A decadent slice of creamy cheesecake with a graham cracker crust, topped with a luscious strawberry compote and fresh berries.',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1609840117173-77f07c44ad9f',  // Unsplash direct image URL
      category: 'Desserts',
    },
  ];
}

function MenuSection({ category, items }: { category: string; items: MenuItem[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-primary">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg bg-card">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-card-foreground">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="mt-2 font-semibold text-primary">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MenuItems() {
  const menuItems = use(getMenuItems());
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <>
      {categories.map((category) => (
        <Suspense key={category} fallback={<CategorySkeleton />}>
          <MenuSection
            category={category}
            items={menuItems.filter(item => item.category === category)}
          />
        </Suspense>
      ))}
    </>
  )
}

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
        Our Exquisite Menu
      </h1>
      <p className="text-lg text-center mb-12 text-muted-foreground">
        Browse through our delicious categories and choose your favorite dishes.
      </p>
      <Suspense fallback={<MenuSkeleton />}>
        <MenuItems />
      </Suspense>
    </div>
  )
}

function CategorySkeleton() {
  return (
    <div className="mb-10">
      <Skeleton className="h-10 w-32 bg-muted rounded-md mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, j) => (
          <Skeleton key={j} className="h-64 w-full bg-muted rounded-md" />
        ))}
      </div>
    </div>
  )
}

function MenuSkeleton() {
  return (
    <div className="space-y-10">
      {[...Array(3)].map((_, i) => (
        <CategorySkeleton key={i} />
      ))}
    </div>
  )
}