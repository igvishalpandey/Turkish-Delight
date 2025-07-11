import React from 'react'
import { HeroBG } from '@/images'
import { CalendarDays, User, MapPin, Filter } from 'lucide-react'

const categories = [
  { name: 'Airlines', icon: '✈️' },
  { name: 'Hotels & Resorts', icon: '🏨', selected: true },
  { name: 'Tour Operators', icon: '🗺️' },
  { name: 'Cruise Liners', icon: '🚢' },
  { name: 'Spas & Massage Parlors', icon: '💆' },
  { name: 'Gold & Jewelry Shops', icon: '💍' },
  { name: 'Bazaar', icon: '🛍️' },
  { name: 'Sightseeing', icon: '🚴' },
]


const HeroSection = () => {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBG.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text Section */}
      <div className="relative z-10 h-full flex flex-col pr-10 pt-10 max-w-5xl ml-20">
        <div>
          <h1 className="text-white text-5xl font-thin leading-tight uppercase">Unforgettable</h1>
          <h1 className="text-white text-6xl font-semibold leading-tight uppercase">Tours, Personalized</h1>
          <h1 className="text-white text-5xl font-thin leading-tight uppercase">For You</h1>
        </div>
        <p className="text-white text-base mt-4 max-w-lg">
          From hidden gems to iconic landmarks, let Trip Advisor craft your
          perfect travel itinerary. Hassle-free and unforgettable.
        </p>
      </div>

      {/* Floating Tab + Form Card */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Tabs */}
          <div className="flex overflow-x-auto justify-between gap-6 px-6 py-4 border-b">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-xs min-w-[80px] cursor-pointer ${cat.selected ? 'text-red-500 border-b-2 border-red-500 pb-2' : 'text-gray-500'
                  }`}
              >
                <div className="text-2xl">{cat.icon}</div>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Search Form */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Hotels & Resort</h2>
              <button className="flex items-center text-sm text-gray-600">
                <Filter className="h-4 w-4 mr-1" />
                Filters
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Location */}
              <div className="flex-1 min-w-[200px] border p-3 rounded-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City, Property name or Location"
                  className="outline-none w-full text-sm"
                />
              </div>

              {/* Check-in */}
              <div className="min-w-[200px] border p-3 rounded-lg flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">03 May 2025</p>
                  <p>Saturday</p>
                </div>
              </div>

              {/* Check-out */}
              <div className="min-w-[200px] border p-3 rounded-lg flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">Check Out</p>
                </div>
              </div>

              {/* Guests */}
              <div className="min-w-[160px] border p-3 rounded-lg flex items-center gap-2">
                <User className="h-5 w-5 text-gray-400" />
                <div className="text-sm">
                  <p>1 Adult</p>
                  <p className="text-gray-500 text-xs">1 Room</p>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#F25C47] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#e04c38] transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
