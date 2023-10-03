<script lang="ts">
export default {
  methods: {
    printPage() {
      window.print();
    },
  },
};
</script>

<template>
  <div
    class="flex items-end justify-center mt-5 space-x-3 text-2xl cursor-pointer lg:text-2xl lg:m-0 text-slate-500"
  >
    <button
      @click="printPage"
      target="_blank"
      class="no-print transition-all duration-200 hover:text-slate-700 text-2xl"
    >
      <UIcon name="i-mdi-printer-outline" />
    </button>
    <a
      href="https://github.com/rizzra26"
      target="_blank"
      class="transition-all duration-200 hover:text-slate-700 text-2xl"
    >
      <UIcon name="i-mdi-github" />
    </a>
    <a
      href="https://www.linkedin.com/in/rizkira/"
      target="_blank"
      class="transition-all duration-200 hover:text-slate-700 text-2xl"
    >
      <UIcon name="i-mdi-linkedin" />
    </a>
    <a
      href="mailto:rizzra26@gmail.com"
      target="_blank"
      class="transition-all duration-200 hover:text-slate-700 text-2xl"
    >
      <UIcon name="i-mdi-at" />
    </a>
  </div>
</template>
