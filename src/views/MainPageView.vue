<script setup>
import MainHeader from '../components/MainHeader.vue'
import FirstScreen from '../components/homepage/FirstScreen.vue'
import NewsScreen from '../components/homepage/NewsScreen.vue'
import ProjectsScreen from '../components/homepage/ProjectsScreen.vue'
import RoutesScreen from '../components/homepage/RoutesScreen.vue'
import AboutScreen from '../components/homepage/AboutScreen.vue'
import HelpScreen from '../components/homepage/HelpScreen.vue'
import MainFooter from '../components/MainFooter.vue'

/* resizes: 1280, 1024, 768, 640*/
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <MainHeader />
  </header>

  <main>
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


