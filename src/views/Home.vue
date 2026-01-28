<script setup>
// Import the SAME data source
import { useBars } from '../composables/useBars'

// This automatically gets the 5 nearest bars sorted by distance
const { nearestBars } = useBars()
</script>

<template>
  <section id="page-home" class="flex flex-col h-full w-full">

    <section class="mt-6 px-0">
      <div class="px-6 flex items-baseline justify-between mb-4">
        <h3 class="text-2xl font-bold tracking-tighter text-white uppercase drop-shadow-sm italic">Now Streaming</h3>
        <span class="text-xs text-secondary font-mono uppercase tracking-widest animate-pulse">{{ $t('videos') }}</span>
      </div>
      <div class="flex overflow-x-auto gap-4 px-6 pb-6 hide-scrollbar snap-x snap-mandatory">
        <div class="min-w-[280px] snap-center group cursor-pointer">
          <div
            class="relative aspect-video rounded-lg overflow-hidden border border-white/10 group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(213,123,7,0.3)]">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style="background-image: url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop');">
            </div>
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div
                class="size-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">
                <span class="material-symbols-outlined text-white">play_arrow</span>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <p class="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">Underground Jazz
              Sessions</p>
            <p class="text-xs text-white/50 truncate">Blue Note Basement • 1.2k watching</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-4">
      <div class="space-y-8 pb-10">

        <section class="px-6 animate-slide-up delay-200">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold uppercase text-white tracking-tight font-display">Proximity Intel</h2>
            <span class="text-[10px] text-primary animate-pulse">● LIVE UPDATES</span>
          </div>

          <div class="flex flex-col gap-3">
            <div v-for="bar in nearestBars" :key="bar.id"
              class="group relative flex items-center gap-4 p-3 bg-[#1A1A1A] border border-white/5 rounded-xl hover:border-primary/50 transition-all cursor-pointer overflow-hidden">

              <div
                class="w-16 h-16 rounded-lg bg-cover bg-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform duration-500"
                :style="{ backgroundImage: `url(${bar.image})` }"></div>

              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">{{ bar.name
                  }}</h3>

                <div class="flex items-center gap-2 mt-1">
                  <span class="text-[10px] bg-white/5 text-white/60 px-1.5 py-0.5 rounded uppercase tracking-wider">{{
                    bar.tags[0] }}</span>
                  <span class="text-[10px] text-primary font-mono">{{ bar.distance.toFixed(1) }} km</span>
                </div>
              </div>

              <span
                class="material-symbols-outlined text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>
<style scoped>
/* Paste any specific CSS classes like .glass-card or .ticket-stub here */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>