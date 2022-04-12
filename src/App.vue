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

<style lang="scss">
#app {
  position: relative;

  header {
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
    right: 0;
  }

}
</style>