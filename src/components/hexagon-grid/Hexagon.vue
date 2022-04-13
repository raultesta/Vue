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
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
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
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    
    &:after {
      content: 'An Hexagon';
    }
  }
}
</style>


