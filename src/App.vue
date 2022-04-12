<template>
  <div id="app">
    <header>
      <main-nav/>
    </header>
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "Gotham";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Gotham"), url("/src/assets/fonts/Gotham-Black/Gotham-Black.ttf") format("truetype");
};

</style>

<script>
import MainNav from './components/nav/MainNav.vue'

export default {
  name: 'app',
  components: {
    MainNav
  }
}
</script>

