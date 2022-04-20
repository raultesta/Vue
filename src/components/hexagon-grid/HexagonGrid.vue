<template>
  <b-row class="hexagon-grid" :class="size">
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
    size: {
      type: String,
      default: 'regular',
    },
  },
}
</script>

<style lang="scss">
  // Grid tutotial: https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/
  $regularSize: 215px; 
  $regularNumberOfHexagonsPerRow: 5;
  $regularMargin: 15px;
  /* DO NOT CHANGE - DARK MAGIC AHEAD */
  $regularFloat: calc(1.732 * $regularSize + 4 * $regularMargin  - 1px);
  $regularWrapperWidth: (($regularSize + ($regularMargin * 2)) * $regularNumberOfHexagonsPerRow) + 30;

  $largeSize: 430px; 
  $largeNumberOfHexagonsPerRow: 3;
  $largeMargin: 30px;
  /* DO NOT CHANGE - DARK MAGIC AHEAD */
  $largeFloat: calc(1.732 * $largeSize + 4 * $largeMargin  - 1px);
  $largeWrapperWidth: (($largeSize + ($largeMargin * 2)) * $largeNumberOfHexagonsPerRow) + 30;

  .hexagon-grid {
    max-width: $regularWrapperWidth;
    margin: auto;

    .hexagon-grid-wrapper {
      &::before {
        content: "";
        width: calc($regularSize/2 + $regularMargin);
        shape-outside: repeating-linear-gradient(#0000 0 calc($regularFloat - 3px), #000  0 $regularFloat);
        float: left;
        height: 120%;
      }

      .hexagon {
        background-color: #000;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        width: $regularSize;
        margin: $regularMargin;
        height: calc($regularSize * 1.1547); 
        margin-bottom: calc($regularMargin - $regularSize * 0.2885); 
        display: inline-block;
        font-size:initial;

        .hex-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }

    // Large sizes
    &.large {
      max-width: $largeWrapperWidth;

      .hexagon-grid-wrapper {
        &::before {
          width: calc($largeSize/2 + $largeMargin);
          shape-outside: repeating-linear-gradient(#0000 0 calc($largeFloat - 3px), #000  0 $largeFloat);
        }
        
        .hexagon {
          width: $largeSize;
          margin: $largeMargin;
          height: calc($largeSize * 1.1547); 
          margin-bottom: calc($largeMargin - $largeSize * 0.2885); 
        }
      }
    }
  }
</style>

