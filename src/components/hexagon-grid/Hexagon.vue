<template>
<div class="hexagon-wrapper">
    <div class="hexagon">
       <img class="hex-img" :src= "imgSrc">
    </div>
    <postit v-if="topText" :content="topText" position="topText"/>
    <postit v-if="topRightText" :content="topRightText" position="topRightText"/>
    <postit v-if="topLeftText" :content="topLeftText" position="topLeftText"/>
    <postit v-if="bottomRightText" :content="bottomRightText" position="bottomRightText"/>
    <postit v-if="bottomLeftText" :content="bottomLeftText" position="bottomLeftText"/>
    <postit v-if="bottomText" :content="bottomText" position="bottomText"/>
</div>

</template>

<script>
import Postit from '@/components/postit/Postit.vue';

export default {
  name: 'hexagon',
  props: {
    imgSrc: String,
    topText: String,
    topRightText: String,
    topLeftText: String,
    bottomRightText: String,
    bottomLeftText: String,
    bottomText: String,
  },
  components: {
    Postit,
  },
}
</script>

<style lang="scss">
.hexagon-wrapper {
  position: relative;

  .hexagon {
    color: purple;
    outline: 2px solid purple;
    border: 2px solid purple;
    outline-offset: -2px;
    transition: outline-offset 250ms ease;

    &:focus,
    &:hover {
      outline-width: 8px;
      outline-offset: 8px;
    }
  }
}
</style>


