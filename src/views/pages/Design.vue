<template>
    <div class="page-design">
      <h1>Design</h1>
      <b-row class="mt-4 mx-4">
        <b-col v-for="(hexagonSrc, index) in hexagons" :key="index" class="mb-4 d-flex justify-content-center">
          <hexagon :imgSrc="hexagonSrc"/>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import Hexagon from '@/components/hexagon-grid/Hexagon.vue';

export default {
  name: 'design',

  data: () => ({
    
    hexagons: [
      '/src/assets/images/Hexagons_RT-01.svg',
      '/src/assets/images/Hexagons_RT-02.svg',
      '/src/assets/images/Hexagons_RT-03.svg',
      '/src/assets/images/Hexagons_RT-04.svg',
      '/src/assets/images/Hexagons_RT-05.svg',
      '/src/assets/images/Hexagons_RT-06.svg',
      '/src/assets/images/Hexagons_RT-07.svg',
      '/src/assets/images/Hexagons_RT-08.svg',
      '/src/assets/images/Hexagons_RT-09.svg',
      '/src/assets/images/Hexagons_RT-10.svg',
      '/src/assets/images/Hexagons_RT-11.svg',
      '/src/assets/images/Hexagons_RT-12.svg',
      '/src/assets/images/Hexagons_RT-13.svg',
      '/src/assets/images/Hexagons_RT-14.svg',
      '/src/assets/images/Hexagons_RT-15.svg',
      '/src/assets/images/Hexagons_RT-16.svg',
      '/src/assets/images/Hexagons_RT-17.svg',
      '/src/assets/images/Hexagons_RT-18.svg',
      '/src/assets/images/Hexagons_RT-19.svg',
      '/src/assets/images/Hexagons_RT-20.svg',
      '/src/assets/images/Hexagons_RT-21.svg',
      '/src/assets/images/Hexagons_RT-22.svg',
      '/src/assets/images/Hexagons_RT-23.svg',
      '/src/assets/images/Hexagons_RT-24.svg',
      '/src/assets/images/Hexagons_RT-25.svg',
      '/src/assets/images/Hexagons_RT-26.svg',
      '/src/assets/images/Hexagons_RT-27.svg',
      '/src/assets/images/Hexagons_RT-28.svg',
      '/src/assets/images/Hexagons_RT-29.svg',
      '/src/assets/images/Hexagons_RT-30.svg',
      '/src/assets/images/Hexagons_RT-31.svg',
      '/src/assets/images/Hexagons_RT-32.svg',
    ],
  }),

  components: {
    Hexagon
  },
}
</script>

<style lang="scss">
.page-design {
  padding-top: 161px;
}
</style>

