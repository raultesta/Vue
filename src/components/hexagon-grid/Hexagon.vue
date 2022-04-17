<template>
    <div class="hexagon">
      <span></span>
    </div>
</template>

<script>
export default {
  name: 'hexagon'
}
</script>

<style lang="scss">
.hexagon {
  background-color: green;
  clip-path: polygon(8% 29%, 50% 0, 92% 29%, 92% 75%, 50% 100%, 8% 75%);
  width: 215px;
  height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
    &:after {
      content: 'What am I?';
    }

  &:hover {
    background-color: red;
    clip-path: polygon(8% 29%, 50% 0, 92% 29%, 92% 75%, 50% 100%, 8% 75%);
    
    &:after {
      content: 'An Hexagon';
    }
  }
}
</style>


