<script setup>
import { ref, computed } from 'vue'

// 1. Reactive State for the 5 beer dimensions (0-100)
const prefs = ref({
  bitterness: 85,
  malt: 70,
  body: 45,
  aroma: 60,
  abv: 80
})

// 2. Logic to convert 0-100 values into SVG coordinates (50,50 is center)
// The points are calculated using trigonometry for a 5-axis pentagon
const points = computed(() => {
  const center = 50
  const radius = 40 // Max radius from center
  const p = prefs.value
  
  // Angles for pentagon vertices (in radians)
  const angle = (Math.PI * 2) / 5

  // Helper to calculate X,Y for each axis
  const getCoord = (val, i) => {
    const r = (val / 100) * radius
    const x = center + r * Math.sin(i * angle)
    const y = center - r * Math.cos(i * angle)
    return `${x},${y}`
  }

  return [
    getCoord(p.bitterness, 0),
    getCoord(p.malt, 1),
    getCoord(p.body, 2),
    getCoord(p.aroma, 3),
    getCoord(p.abv, 4)
  ].join(' ')
})

// Formatting for display
const formattedABV = computed(() => (prefs.value.abv / 10).toFixed(1) + '%')

const resetCalibration = () => {
  prefs.value = { bitterness: 50, malt: 50, body: 50, aroma: 50, abv: 50 }
}
</script>

<template>
  <section id="page-prefs" class="flex flex-col h-full w-full gap-6 p-4">
    <div class="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden group bg-industrial-surface/40 backdrop-blur-xl border border-white/10">
      
      <div v-for="pos in ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3']" 
           :key="pos" :class="`absolute ${pos} size-2 rounded-full bg-[#1a1a1a] border border-[#333] shadow-inner`" />

      <div class="flex flex-col items-center justify-center min-h-[300px] relative">
        <div class="absolute top-0 left-0 text-[9px] font-mono text-white/30 tracking-widest border border-white/10 px-2 py-0.5 rounded uppercase">
          Neural_Link: Vector_5
        </div>

        <div class="relative w-full max-w-[300px] aspect-square mt-4">
          <svg class="w-full h-full drop-shadow-[0_0_15px_rgba(213,123,7,0.2)]" viewBox="0 0 100 100">
            <polygon v-for="r in [40, 30, 20]" :key="r" fill="none" 
              :points="`50,${50-r} ${50+r*0.95},${50-r*0.3} ${50+r*0.58},${50+r*0.8} ${50-r*0.58},${50+r*0.8} ${50-r*0.95},${50-r*0.3}`" 
              stroke="#444" stroke-dasharray="2 2" stroke-width="0.5" />
            
            <line v-for="i in 5" :key="i" stroke="#333" stroke-width="0.5" x1="50" y1="50" 
              :x2="50 + 45 * Math.sin((i-1) * (Math.PI*2/5))" 
              :y2="50 - 45 * Math.cos((i-1) * (Math.PI*2/5))" />

            <polygon class="transition-all duration-500 ease-out" 
              fill="rgba(213, 123, 7, 0.2)"
              :points="points" 
              stroke="#d57b07" stroke-linejoin="round" stroke-width="1.5" />
          </svg>

          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 label-tag">BITTERNESS</div>
          <div class="absolute top-[35%] right-[-10px] label-tag">MALT</div>
          <div class="absolute bottom-2 right-[5%] label-tag">BODY</div>
          <div class="absolute bottom-2 left-[5%] label-tag">AROMA</div>
          <div class="absolute top-[35%] left-[-10px] label-tag">ABV</div>
        </div>
      </div>

      <div class="flex flex-col gap-5 border-t border-white/10 pt-6">
        <div v-for="(val, key) in prefs" :key="key" class="grid grid-cols-[80px_1fr_40px] items-center gap-4 group/slider">
          <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">{{ key }}</label>
          <div class="relative h-6 flex items-center">
            <input v-model.number="prefs[key]" class="w-full relative z-10 accent-primary" type="range" max="100" min="5" />
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 rounded-full"></div>
          </div>
          <span class="text-xs font-mono text-primary text-right">{{ key === 'abv' ? formattedABV : val }}</span>
        </div>
      </div>

      <div class="flex justify-between items-center mt-2 pt-4 border-t border-white/5">
        <button class="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-widest">
          <span class="material-symbols-outlined text-sm">history</span> Undo
        </button>
        <button @click="resetCalibration" class="px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 rounded text-[10px] font-black uppercase tracking-widest transition-all">
          Reset Calibration
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../style.css";
.label-tag {
  @apply text-[9px] font-bold text-primary bg-midnight/90 px-1.5 py-0.5 rounded border border-primary/20 pointer-events-none tracking-tighter;
}

/* Custom range slider styling */
input[type=range] {
  appearance: none;
  background: transparent;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #d57b07;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(213, 123, 7, 0.5);
  margin-top: -6px;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.1);
}
</style>