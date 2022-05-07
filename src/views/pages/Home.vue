<template>
    <b-container class="background home">
      <b-row class="background-row">
        <b-col class="col1 px-0">
            <img class="raul-main" src="../../assets/images/imagem-RT-site.svg">
        </b-col>
        <b-col class="col2">
          <div class="utility-text"> 
            <span>Portfolio Raul Testa</span>
            <h2>Utility is the true criterion of beauty</h2>
          </div>
        </b-col>
        <b-col class="col3 d-none d-lg-block"></b-col>
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
@import "@/assets/scss/base/_variables.scss";
@import "@/../node_modules/bootstrap/scss/mixins/_breakpoints.scss";

#app {
  .background.home {
    max-width: 100% !important;

    .background-row {
      @include media-breakpoint-down(md) {
        height: 100vh;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        flex-wrap: nowrap;
      }

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

          @include media-breakpoint-down(md) {
            max-width: 100%;
            min-width: 0;
          }
        }
      }

      .col2 {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        max-width: 300px;

        @include media-breakpoint-down(md) {
          background-color: #f1f1f1;
          width: 100%;
          max-width: 100%;

          .utility-text {
            max-width: 310px;
            margin-left: auto;
            margin-top: 200px;
            
            span {
              font-size: 26px;
              color: #828282;
            }
            
            h2 {
              font-size: 48px;
            }
          }
        }
      }

      .col3 {
        max-width: 150px;
      }
    }
  }
}
</style>
