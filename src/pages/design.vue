<template>
    <b-container class="background">
        <b-row class="background-row">
            <b-col class="col1 px-0">
            </b-col>
        </b-row>
      
    </b-container>


</template>

<style lang="scss">
#app {
  header {
    width: 100%;
    position: fixed;
    z-index: 1;
  }
  .background {
    max-width: 100% !important;

    .background-row {
      .col1 {
        height: 15vh;
        background-color: #F1F1F1;
        position: fixed;
      }}

    .background-row-2 {
      .col1 {
        height: 100vh;
        background-color: #9c0404
      }
        .nav-buttons {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 1rem;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
</style>