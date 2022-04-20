<template>
    <b-navbar class="main-nav" :class="currentPage" type="light">
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
                <b-button :to="{ name:'web-ux' }" pill variant="primary">Web & UX/UI Design</b-button>
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
        currentPage: null,
    }),

    watch: {
        '$route.name' (name) {
            this.currentPage = name;
        },
    },
}
</script>

<style lang="scss">
    .main-nav {
        background-color: #F1F1F1;

        &.home {
            background-color: transparent;
        }

        .branding {
            width: 700px;
            
            .cargos {
                span {
                    margin-right: 15px;
                }
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
    }
</style>
