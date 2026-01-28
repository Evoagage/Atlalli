// src/composables/useBars.js
import { ref, computed } from 'vue'

// 1. THE MOCK DATABASE
// This structure mimics what your future DB will return.
const bars = ref([
  {
    id: 1,
    name: "The Foundry",
    location: { lat: 19.4360, lng: -99.1350 }, // Example Coords
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
    tags: ["Industrial", "Craft Beer", "Live Rock"], // Genres
    beerCount: 24,
    description: "High-voltage brews in a converted steel mill."
  },
  {
    id: 2,
    name: "Vanguard Club",
    location: { lat: 19.4290, lng: -99.1300 },
    image: "https://images.unsplash.com/photo-1566417713204-61fa03854342?auto=format&fit=crop&q=80&w=1000",
    tags: ["Techno", "Cocktails", "Underground"],
    beerCount: 8,
    description: "Neon lights and synthetic beats."
  },
  {
    id: 3,
    name: "Sector 4 Cache",
    location: { lat: 19.4326, lng: -99.1400 },
    image: "https://images.unsplash.com/photo-1600863004653-e5d444740f4e?auto=format&fit=crop&q=80&w=1000",
    tags: ["Speakeasy", "Jazz", "Whisky"],
    beerCount: 12,
    description: "Hidden behind the old metro station."
  },
  {
    id: 4,
    name: "Neon Garden",
    location: { lat: 19.4400, lng: -99.1332 },
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=1000",
    tags: ["Rooftop", "House", "Cider"],
    beerCount: 15,
    description: "Vertical garden overlooking the smog."
  }
])

// 2. USER LOCATION STATE
const userLocation = ref({ lat: 19.4326, lng: -99.1332 }) // Default center

// 3. MATH HELPER: Calculate Distance (Haversine Formula)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

// 4. COMPUTED: Get the Nearest Bars automatically
const nearestBars = computed(() => {
  return bars.value.map(bar => {
    // Calculate distance for each bar
    const dist = getDistance(
        userLocation.value.lat, userLocation.value.lng,
        bar.location.lat, bar.location.lng
    )
    return { ...bar, distance: dist } // Add distance to the bar object
  })
  .sort((a, b) => a.distance - b.distance) // Sort nearest first
  .slice(0, 5) // Take top 5
})

// Export everything so components can use it
export function useBars() {
  return {
    bars,
    userLocation,
    nearestBars
  }
}