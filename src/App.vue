<template>
  <div id="app">
    <header>
      <main-nav/>
    </header>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/nav/MainNav.vue'

export default {
  name: 'app',
  components: {
    MainNav
  }
}
</script>