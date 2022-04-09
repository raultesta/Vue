<template>
  <div id="app">
    <header>
    </header>  
    <b-container class="background m-0 p-0">
      <b-row class="background-row">
        <b-col class="col1">
            <img src="./assets/images/imagem-RT-site.svg">
        </b-col>
        <b-col class="col2" cols="3">
          <div class="utility"> 
            <h2>Utility is the true criterion of beauty</h2>
            <span>Portfolio Raul Testa</span>
          </div>
        </b-col>
        <b-col class="col3" cols="2"></b-col>

      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.background {
  max-width: 100% !important;
  .background-row {
    
    .col3,
    .col1{
      height: 100vh;
      background-color: #F1F1F1
    }
    .col1{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
    .col2{
      background-color: rgb(255, 255, 255);

      .utility {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        align-items: flex-start;
      }
    }
    
  }
}

</style>
