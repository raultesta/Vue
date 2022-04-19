<template>
    <div class="page-main" :class="wrapperClass">
       <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'hexagon',
  props: {
    wrapperClass: String,
  },
}
</script>

<style lang="scss">
.page-main {
  padding-top: 190px;
}
</style>


