<script setup>
import { onMounted, ref, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// IMPORT OUR NEW COMPOSABLE
import { useBars } from '../composables/useBars'

const { bars, userLocation } = useBars()
const radius = ref(1000)
const mapContainer = ref(null)
let map = null
let radiusCircle = null

onMounted(() => {
  // Init Map
  map = L.map(mapContainer.value, { zoomControl: false, attributionControl: false })
     .setView([userLocation.value.lat, userLocation.value.lng], 14)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 20 }).addTo(map)

  // User Pin
  const userIcon = L.divIcon({
    className: 'user-pulse',
    html: `<div style="width: 16px; height: 16px; background: white; border-radius: 50%; box-shadow: 0 0 15px white;"></div>`,
    iconSize: [16, 16]
  })
  L.marker([userLocation.value.lat, userLocation.value.lng], { icon: userIcon }).addTo(map)

  // Circle
  radiusCircle = L.circle([userLocation.value.lat, userLocation.value.lng], {
    color: '#d57b07', fillColor: '#d57b07', fillOpacity: 0.1, weight: 1, dashArray: '5, 10', radius: radius.value
  }).addTo(map)

  // --- DYNAMIC BARS FROM DATABASE ---
  const barIcon = L.divIcon({
    className: 'custom-bar-icon',
    html: `<div style="background-color: rgba(16, 24, 32, 0.9); border: 1px solid #d57b07; border-radius: 50%; width: 24px; height: 24px; flex; align-items: center; justify-content: center; display: flex;">
             <span class="material-symbols-outlined" style="color: #d57b07; font-size: 14px;">local_bar</span>
           </div>`,
    iconSize: [24, 24],
    popupAnchor: [0, -12] // Adjust popup position so it opens above the pin
  })

  // Loop through our data and create markers
  bars.value.forEach(bar => {
    const marker = L.marker([bar.location.lat, bar.location.lng], { icon: barIcon }).addTo(map)
    
    // CUSTOM HTML POPUP
    const popupContent = `
      <div style="min-width: 200px;">
        <div style="height: 80px; width: 100%; background-image: url('${bar.image}'); background-size: cover; border-radius: 4px 4px 0 0; margin-bottom: 8px;"></div>
        <h3 style="color: #d57b07; margin: 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">${bar.name}</h3>
        <p style="color: #ccc; font-size: 10px; margin: 2px 0 8px 0;">${bar.description}</p>
        <div style="display: flex; gap: 4px; flex-wrap: wrap;">
           ${bar.tags.map(tag => `<span style="background: rgba(255,255,255,0.1); color: #fff; padding: 2px 4px; border-radius: 2px; font-size: 9px;">${tag}</span>`).join('')}
        </div>
      </div>
    `
    marker.bindPopup(popupContent)
  })
})

watch(radius, (newVal) => { if (radiusCircle) radiusCircle.setRadius(newVal) })
</script>

<template>
  <section class="relative flex flex-col w-full h-[calc(100vh-135px)] overflow-hidden bg-midnight">
    <div ref="mapContainer" class="absolute inset-0 z-0 bg-midnight"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,24,32,0.4)_100%)] pointer-events-none z-10"></div>
    <div class="absolute top-4 left-4 right-4 z-20 mx-auto max-w-[340px]">
        <div class="bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden p-5 space-y-5">
            <div class="flex justify-between items-center border-b border-white/5 pb-3">
            <div class="flex flex-col">
                <span class="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Surveillance Grid</span>
                <span class="text-primary font-bold text-xs uppercase tracking-widest">Active Scan</span>
            </div>
            <div class="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#d57b07]"></div>
            </div>
            <div class="space-y-4">
            <div class="flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span class="font-bold text-white/40">Discovery Radius</span>
                <span class="text-primary font-black text-lg">{{ (radius / 1000).toFixed(1) }}km</span>
            </div>
            <input v-model.number="radius" min="500" max="5000" step="100" type="range" class="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary">
            </div>
        </div>
    </div>
  </section>
</template>

<style>
/* Override Leaflet Popup Styles for Industrial Look */
.leaflet-popup-content-wrapper {
  background: #1A1A1A !important; /* Dark Background */
  border: 1px solid #d57b07;
  border-radius: 8px !important;
  box-shadow: 0 4px 20px rgba(0,0,0,0.8);
  padding: 0 !important;
  overflow: hidden;
}
.leaflet-popup-content {
  margin: 10px !important;
  width: 220px !important;
}
.leaflet-popup-tip {
  background: #d57b07 !important;
}
.leaflet-container a.leaflet-popup-close-button {
  color: #fff !important;
}
</style>