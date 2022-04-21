<template>
    <b-navbar class="main-nav" :class="currentPage" type="light">
        <b-navbar-brand href="#">
            <div class="branding">
                <h1 class="mb-0">
                    <router-link :to="{ name:'home' }">Portfolio</router-link>
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
            'Raul Testa',
            'UX/UI Designer',           
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
            h1 {
                line-height: 50px;
            }            
            .cargos {
                span {
                    margin-right: 15px;
                }
            }
            
            span {
                font-size: 15px;
                margin-right: 6px;
                
                &:first-child {
                    margin-left: 4px;
                }
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
