<script setup>
import { ref } from 'vue'
import TopNav from './components/TopNav.vue'
import BotNav from './components/BotNav.vue'
import Home from './views/Home.vue'
import Radar from './views/Radar.vue' 
import Preferences from './views/Preferences.vue' // Verify this path matches your folder structure

const currentTab = ref('home')
</script>

<template>
  <div class="fixed inset-0 bg-midnight text-white overflow-hidden flex flex-col">
    <TopNav />

    <main class="flex-1 pt-16 pb-20 overflow-y-auto"> 
      <transition name="page-fade" mode="out-in">
        <div :key="currentTab" class="h-full w-full">
          <Home v-if="currentTab === 'home'" />
          <Radar v-if="currentTab === 'radar'" /> 
          
          <Preferences v-if="currentTab === 'prefs'" />
          
          <div v-if="currentTab === 'wallet'" class="p-10 text-center opacity-50">WALLET MODULE OFFLINE</div>
          <div v-if="currentTab === 'staff'" class="p-10 text-center opacity-50">STAFF ACCESS RESTRICTED</div>
        </div>
      </transition>
    </main>

    <BotNav :activeTab="currentTab" @change-tab="(tab) => currentTab = tab" />
  </div>
</template>

<style>
/* Smooth page transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>