<script setup>
import { ref } from 'vue'
import TopNav from './components/TopNav.vue'
import BotNav from './components/BotNav.vue' // Import the new bar
import Home from './views/Home.vue'

const currentTab = ref('home')
</script>

<template>
  <div class="min-h-screen bg-midnight text-white">
    <TopNav />

    <main class="pt-16 pb-24">
      <Home v-if="currentTab === 'home'" />
      <div v-else class="p-10 text-center uppercase font-mono text-copper">
        Section: {{ currentTab }} <br> [Logic Incoming]
      </div>
    </main>

    <BotNav :activeTab="currentTab" @change-tab="(tab) => currentTab = tab" />
  </div>
</template>