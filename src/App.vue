<script setup>
import { ref } from 'vue'
import TopNav from './components/TopNav.vue'
import BotNav from './components/BotNav.vue'
import Home from './views/Home.vue'
import Radar from './views/Radar.vue' // 1. Import it

const currentTab = ref('home')
</script>

<template>
  <div class="min-h-screen bg-midnight text-white overflow-hidden">
    <TopNav />

    <main class="pt-16"> <Home v-if="currentTab === 'home'" />
      <Radar v-if="currentTab === 'radar'" /> <div v-if="currentTab === 'prefs'" class="p-10">PREFERENCES LOADED</div>
    </main>

    <BotNav :activeTab="currentTab" @change-tab="(tab) => currentTab = tab" />
  </div>
</template>