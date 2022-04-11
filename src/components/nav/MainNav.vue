<template>
    <b-navbar class="main-nav" type="light" variant="transparent">
        <b-navbar-brand href="#">
            <div class="branding">
                <h1><a @click="$router.push('/')">PORTFOLIO</a></h1>
                <span v-for="(cargo, index) in cargos" v-bind:key="index">
                    {{ cargo }}
                </span>
            </div>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <b-button to="/design" pill variant="primary">Design</b-button>
            </b-nav-item>
            <b-nav-item href="#">
                <b-button pill variant="primary">Web & UX/UI Design</b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>

export default {
    name: 'Main Nav',

    data: () => ({
        cargos: [
            'Head of Design',
            'Senior Designer',
            'UX/UI Designer',
            'Master of Laws',
            'Communication Sciences PhD',            
        ],
    }),
}
</script>



<style lang="scss" scoped>
.main-nav {
    .branding{
        h1{
            font-size: 80px;
        }
        span{
            font-size: 11px;
            margin-right: 6px;
        }
    }


}


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
