<template>
  <div class="flex w-screen lg:flex-row flex-col">
    <div
      class="lg:w-[65%] w-full bg-cover bg-effect text-slate-950 px-8 sm:px-16"
    >
      <Me />
      <div class="hidden print:inline">
        <AboutMe />
        <Skills />
        <Languages />
      </div>
      <Work />
      <Projects />
      <Certificates />
      <Education />
    </div>
    <div
      class="lg:w-[45%] no-print w-full bg-cover bg-[url(/images/right-bg.jpg)] min-h-full h-full text-white px-8"
    >
      <AboutMe />
      <Skills />
      <Languages />
      <MadeWithTailwind />
      <br />
      <br />
    </div>
  </div>
</template>

<style lang="scss">
.bg-effect {
  background: rgba(0, 0, 0, 0)
    radial-gradient(
      64.9% 34.2308% at 0% 0%,
      rgba(147, 196, 253, 0.275) 0%,
      rgba(255, 255, 255, 0) 100%
    )
    repeat scroll 0% 0%;
}
</style>
