<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<style lang="scss">
// Global styles are imported in main.scss
</style>
