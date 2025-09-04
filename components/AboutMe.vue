<script lang="ts" setup>
const paragraph = `Hi, my name is Rizki. I'm a Full-Stack Developer based in Bekasi, Indonesia.\n\nA reliable and passionate person for building innovative and intuitive web or mobile applications, I'm constantly striving to improve my skills and stay up-to-date with the latest technologies.\n\nI'm currently self taught learning Back-End skills with Nest and doing some indie project, I'm also looking for a job as a developer.`;
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
      class="flex gap-2 mt-5 text-sm transition-all duration-200 hover:text-slate-300 no-print text-slate-400"
    >
      <UIcon name="i-mdi-map-marker-outline" class="text-2xl"></UIcon>
      West Java - Bekasi, Indonesia
    </a>
  </div>
</template>
