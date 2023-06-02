<script setup>
import MainHeader from '../components/MainHeader.vue'
import FirstScreen from '../components/homepage/FirstScreen.vue'
import NewsScreen from '../components/homepage/NewsScreen.vue'
import ProjectsScreen from '../components/homepage/ProjectsScreen.vue'
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <MainHeader />
  </header>

  <main>
    <FirstScreen />
    <NewsScreen />
    <ProjectsScreen />
  </main>

  <footer>

  </footer>
</template>
