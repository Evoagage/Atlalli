<template>
  <section id="page-home" class="flex flex-col h-full w-full">

    <section class="mt-6 px-0">
      <div class="px-6 flex items-baseline justify-between mb-4">
        <h3 class="text-2xl font-bold tracking-tighter text-white uppercase drop-shadow-sm italic">Now Streaming</h3>
        <span class="text-xs text-secondary font-mono uppercase tracking-widest animate-pulse">● Live</span>
      </div>
      <div class="flex overflow-x-auto gap-4 px-6 pb-6 hide-scrollbar snap-x snap-mandatory">
        <div class="min-w-[280px] snap-center group cursor-pointer">
          <div class="relative aspect-video rounded-lg overflow-hidden border border-white/10 group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(213,123,7,0.3)]">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop');"></div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div class="size-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">
                <span class="material-symbols-outlined text-white">play_arrow</span>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <p class="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">Underground Jazz Sessions</p>
            <p class="text-xs text-white/50 truncate">Blue Note Basement • 1.2k watching</p>
          </div>
        </div>
        </div>
    </section>

    <section class="px-6 py-4">
      <div class="bg-industrial-surface/40 rounded-xl p-6 relative overflow-hidden group border border-white/5">
        <div class="absolute top-0 right-0 p-3 opacity-20">
          <span class="material-symbols-outlined text-6xl text-white">graphic_eq</span>
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold tracking-tight text-white mb-1 uppercase">Your Sensory Script</h3>
          <p class="text-secondary/80 text-xs font-mono mb-6 uppercase tracking-widest">Environment v2.4 • Active</p>
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-black/40 p-3 rounded border border-white/5">
              <span class="text-xs text-white/60 uppercase">Volume</span>
              <p class="text-lg font-bold text-primary">Low-Mid</p>
            </div>
            <div class="bg-black/40 p-3 rounded border border-white/5">
              <span class="text-xs text-white/60 uppercase">Lighting</span>
              <p class="text-lg font-bold text-primary">Dim Amber</p>
            </div>
          </div>
          <button class="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-lg">tune</span> Adjust Script
          </button>
        </div>
      </div>
    </section>

    </section>
</template>

<style scoped>
/* Paste any specific CSS classes like .glass-card or .ticket-stub here */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>