<template>
    <b-navbar class="main-nav" type="light" variant="transparent">
        <b-navbar-brand href="#">
            <div class="branding">
                <h1>PORTFOLIO</h1>
                <div class="cargos">
                    <span>Head of Design</span>
                    <span>Senior Designer</span>
                    <span>UX/UI Designer</span>
                    <span>Master of Laws</span>
                    <span>Communication Sciences PhD</span>

                </div>
            </div>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <b-button pill variant="primary">Design</b-button>
            </b-nav-item>
            <b-nav-item href="#">
                <b-button pill variant="primary">Web & UX/UI Design</b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<style lang="scss" scoped>
/*
WORK DOMINGO: 
- cargos em loop e mudar a font-size
*/ 

.branding {
    width: 700px;

    .cargos {
        span {
            margin-right: 15px;
        }
    }
}

.navbar-nav {
    width: 250px;
    margin-right: 135px;
    display: flex;
    justify-content: space-around;
}
</style>
