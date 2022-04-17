<template>
    <div class="page-design">
      <h1>Design</h1>
      
      <b-row class="mt-4 mx-4">
        <b-col v-for="(hexagon, index) in hexagons" :key="index" class="mb-4 d-flex justify-content-center">
          <hexagon/>
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
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
      'hexagon',
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

