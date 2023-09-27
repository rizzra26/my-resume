<script lang="ts" setup>
const paragraph = `Hi, my name is Rizki, usually my friends call me Kiko.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur justo ut orci tristique faucibus et facilisis leo. Mauris ante libero, commodo vel sem vitae, pellentesque maximus massa.\n\nMauris ante libero, commodo vel sem vitae, pellentesque maximus massa. In hac habitasse platea dictumst.`;
</script>

<template>
  <div class="font-inter">
    <h4 class="pt-10 pb-2 font-inter text-base font-normal text-slate-500/90">
      About
    </h4>
    <div class="space-y-5 text-sm">
      <p class="whitespace-pre-wrap" v-html="paragraph" />
    </div>
    <a
      ref="locationRef"
      href="https://www.google.com/maps/search/bekasi"
      target="_blank"
      rel="noreferrer"
      class="flex gap-2 mt-5 text-sm transition-all duration-200 hover:text-slate-300 text-slate-400"
    >
      <UIcon name="i-mdi-map-marker-outline" class="text-2xl"></UIcon>
      West Java - Bekasi, Indonesia
    </a>
  </div>
</template>
