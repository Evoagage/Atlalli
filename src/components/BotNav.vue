<script setup>
// This defines the "events" this component can send to App.vue
defineEmits(['change-tab'])
defineProps(['activeTab'])
</script>

<template>
  <nav class="fixed bottom-0 z-50 w-full h-[75px] bg-[#1A1A1A] border-t-2 border-copper shadow-[0_-5px_20px_rgba(0,0,0,0.7)] flex items-center justify-around px-2">
    
    <button @click="$emit('change-tab', 'home')" class="flex flex-col items-center justify-center w-16 h-full gap-1 group">
      <span class="material-symbols-outlined transition-colors text-2xl" 
            :class="activeTab === 'home' ? 'text-primary' : 'text-white/40 group-hover:text-white'">grid_view</span>
      <span class="text-[9px] font-bold tracking-wider"
            :class="activeTab === 'home' ? 'text-primary' : 'text-white/30 group-hover:text-white/60'">HOME</span>
    </button>

    <button @click="$emit('change-tab', 'radar')" class="flex flex-col items-center justify-center w-16 h-full gap-1 group">
      <span class="material-symbols-outlined transition-colors text-2xl"
            :class="activeTab === 'radar' ? 'text-primary' : 'text-white/40 group-hover:text-white'">radar</span>
      <span class="text-[9px] font-bold tracking-wider"
            :class="activeTab === 'radar' ? 'text-primary' : 'text-white/30 group-hover:text-white/60'">RADAR</span>
    </button>

    <button @click="$emit('change-tab', 'prefs')" class="flex flex-col items-center justify-center w-16 h-full gap-1 group">
      <span class="material-symbols-outlined transition-colors text-2xl"
            :class="activeTab === 'prefs' ? 'text-primary' : 'text-white/40 group-hover:text-white'">tune</span>
      <span class="text-[9px] font-bold tracking-wider"
            :class="activeTab === 'prefs' ? 'text-primary' : 'text-white/30 group-hover:text-white/60'">PREFS</span>
    </button>

    <button @click="$emit('change-tab', 'wallet')" class="flex flex-col items-center justify-center w-16 h-full gap-1 group">
      <span class="material-symbols-outlined transition-colors text-2xl"
            :class="activeTab === 'wallet' ? 'text-primary' : 'text-white/40 group-hover:text-white'">qr_code</span>
      <span class="text-[9px] font-bold tracking-wider"
            :class="activeTab === 'wallet' ? 'text-primary' : 'text-white/30 group-hover:text-white/60'">WALLET</span>
    </button>

    <button @click="$emit('change-tab', 'staff')" class="flex flex-col items-center justify-center w-16 h-full gap-1 group">
      <span class="material-symbols-outlined transition-colors text-2xl"
            :class="activeTab === 'staff' ? 'text-primary' : 'text-white/40 group-hover:text-white'">shield_person</span>
      <span class="text-[9px] font-bold tracking-wider"
            :class="activeTab === 'staff' ? 'text-primary' : 'text-white/30 group-hover:text-white/60'">STAFF</span>
    </button>

  </nav>
</template>