<template>
    <div class="hexagon">
       <img class="hex-img" :src= "imgSrc">
    </div>
</template>

<script>
export default {
  name: 'hexagon',
  props: {
    imgSrc: String,
  },
}
</script>

<style lang="scss">
$size: 215px; 

.hexagon {
  background-color: green;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  width: $size;
  height: calc($size * 1.1547);
  // width: 215px;
  // height: 215px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  

  .hex-img {
   object-fit: cover;
   width: 100%
  }
}
</style>


