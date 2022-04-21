<template>
<div class="hexagon-wrapper">
    <div class="hexagon">
       <img class="hex-img" :src= "imgSrc">
    </div>
    <div class="postit topText">
      {{ topText }}
    </div>
    <div class="postit topRightText">
      {{ topRightText }}
    </div>
    <div class="postit topLeftText">
      {{ topLeftText }}
    </div>
    <div class="postit bottomRightText">
      {{ bottomRightText }}
    </div>
    <div class="postit bottomLeftText">
      {{ bottomLeftText }}
    </div>
    <div class="postit bottomText">
      {{ bottomText }}
    </div>
</div>

</template>

<script>
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
}
</script>

<style lang="scss">
// TODO : Styling for ACTUAL postits
// https://dev.to/thormeier/fully-responsive-html-css-sticky-note-4okl
.hexagon-wrapper {
  position: relative;
  
  .postit {
    position: absolute;
    display: flex;
    align-items: center;
    width: 173px;
    height: 173px;
    z-index: 99;
    background-color: #f3c24d;
    padding: 5px;
    text-align: center;

    &.topText {
      top: -80px;
      right: 165px;
    }
    
    &.topRightText {
      top: 0;
      right: 0;
    }
    
    &.topLeftText {
      top: 0;
      left: 0;
    }
    
    &.bottomRightText {
      bottom: -59px;
      right: 0;
    }
    
    &.bottomLeftText {
      bottom: -59px;
      left: 0;
    }
    
    &.bottomText {
      bottom: -145px;
      right: 165px;
    }
  }
}
</style>


