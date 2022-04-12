<template>
    <b-container class="background">
      <b-row class="background-row">
        <b-col class="col1 px-0">
            <img class="raul-main" src="../../assets/images/imagem-RT-site.svg">
        </b-col>
        <b-col class="col2">
          <div class="utility-text"> 
            <h2>Utility is the true criterion of beauty</h2>
            <span>Portfolio Raul Testa</span>
          </div>
        </b-col>
        <b-col class="col3"></b-col>
      </b-row>
    </b-container>
</template>

<script>
import MainNav from '@/components/nav/MainNav.vue'

export default {
  name: 'app',
  components: {
    MainNav,
  }
}
</script>


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
      .col3,
      .col1 {
        height: 100vh;
        background-color: #F1F1F1
      }

      .col1 {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        img.raul-main {
          max-width: 1000px;
          min-width: 400px;
        }
      }

      .col2 {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        max-width: 250px;

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

      .col3 {
        max-width: 150px;
      }
    }
  }
}
</style>
