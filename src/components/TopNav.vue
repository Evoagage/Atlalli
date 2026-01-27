<template>
  <nav class="fixed top-0 w-full h-16 bg-industrial-surface/80 backdrop-blur-xl border-b border-copper/20 z-[100] flex items-center justify-between px-6">
    <div class="flex items-center gap-3">
      <div class="w-6 h-6 bg-primary flex items-center justify-center font-black text-midnight">A</div>
      <span class="font-display font-bold tracking-widest text-sm uppercase">Atlalli</span>
    </div>
    
    <div class="flex gap-4 font-mono text-[10px] font-bold">
      <button @click="$i18n.locale = 'en'" :class="{'text-primary': $i18n.locale === 'en'}">EN</button>
      <button @click="$i18n.locale = 'es'" :class="{'text-primary': $i18n.locale === 'es'}">ES</button>
    </div>
  </nav>
</template>