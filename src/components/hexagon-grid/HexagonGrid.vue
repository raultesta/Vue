<template>
  <b-row class="hexagon-grid">
    <b-col>
      <div class="d-flex">
        <div class="hexagon-grid-wrapper">
          <hexagon
            v-for="(hexagonSrc, index) in hexagons" :key="index"
            :imgSrc="hexagonSrc"
          />
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Hexagon from '@/components/hexagon-grid/Hexagon.vue';

export default {
  name: 'design',
  components: {
    Hexagon,
  },
  props: {
    hexagons: Array,
  },
}
</script>

<style lang="scss">
  $size: 215px; 
  $margin: 15px;
  $float: calc(1.732 * $size + 4 * $margin  - 1px);

  .hexagon-grid {
    max-width: 1623px;
    margin: auto;

    .hexagon-grid-wrapper {
      &::before {
        content: "";
        width: calc($size/2 + $margin);
        float: left;
        height: 120%;
        shape-outside: repeating-linear-gradient(#0000 0 calc($float - 3px), #000  0 $float);
      }

      .hexagon {
        background-color: #000;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        width: $size;
        margin: $margin;
        height: calc($size*1.1547); 
        display: inline-block;
        font-size:initial;
        margin-bottom: calc($margin - $size*0.2885); 

        .hex-img {
          object-fit: cover;
          width: 100%
        }
      }
    }
  }
</style>

