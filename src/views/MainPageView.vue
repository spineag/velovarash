<script setup>
import MainHeader from '../components/MainHeader.vue'
import FirstScreen from '../components/homepage/FirstScreen.vue'
import NewsScreen from '../components/homepage/NewsScreen.vue'
import ProjectsScreen from '../components/homepage/ProjectsScreen.vue'
import RoutesScreen from '../components/homepage/RoutesScreen.vue'
import AboutScreen from '../components/homepage/AboutScreen.vue'
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <MainHeader />
  </header>

  <main>
    <FirstScreen />
    <NewsScreen />
    <ProjectsScreen />
    <RoutesScreen />
    <AboutScreen />
  </main>

  <footer>

  </footer>
</template>
