<template>
    <b-navbar class="main-nav" type="light" variant="transparent">
        <b-navbar-brand href="#">
            <div class="branding">
                <h1>
                    <router-link :to="{ name:'home' }">PORTFOLIO</router-link>
                </h1>
                <span v-for="(cargo, index) in cargos" v-bind:key="index">
                    {{ cargo }}
                </span>
            </div>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <b-button :to="{ name:'design' }" pill variant="primary">Design</b-button>
            </b-nav-item>
            <b-nav-item href="#">
                <b-button pill variant="primary">Web & UX/UI Design</b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'MainNav',

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

<style lang="scss">
    .branding {
        width: 700px;
        
        .cargos {
            span {
                margin-right: 15px;
            }
        }
        
        h1 {
            font-size: 80px;
        }
        span {
            font-size: 11px;
            margin-right: 6px;
        }

        h1 {
            font-size: 80px;
        }

        span {
            font-size: 11px;
            margin-right: 6px;
        }
    }

    .navbar-nav {
        width: 250px;
        margin-right: 135px;
        display: flex;
        justify-content: space-around;
    }
</style>
