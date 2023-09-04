<script setup>
import MainHeader from '../components/MainHeader.vue'
import FirstScreen from '../components/homepage/FirstScreen.vue'
import NewsScreen from '../components/homepage/NewsScreen.vue'
import ProjectsScreen from '../components/homepage/ProjectsScreen.vue'
import RoutesScreen from '../components/homepage/RoutesScreen.vue'
import AboutScreen from '../components/homepage/AboutScreen.vue'
import HelpScreen from '../components/homepage/HelpScreen.vue'
import MainFooter from '../components/MainFooter.vue'
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50 sticky">
    <MainHeader />
  </header>

  <main style="top:-100px">
    <FirstScreen />
    <NewsScreen />
    <ProjectsScreen />
    <RoutesScreen />
    <AboutScreen />
    <HelpScreen />
  </main>

  <footer>
    <MainFooter />
  </footer>
</template>
