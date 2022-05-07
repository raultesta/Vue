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
        <b-navbar-nav>
            <b-nav-item>
                <b-button :to="{ name:'design' }" variant="primary">Design</b-button>
            </b-nav-item>
            <b-nav-item>
                <b-button :to="{ name:'web-ux' }" variant="primary">UX/UI & Design</b-button>
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
    @import "@/assets/scss/base/_variables.scss";
    @import "@/../node_modules/bootstrap/scss/mixins/_breakpoints.scss";


    .main-nav {
        background-color: #F1F1F1;

        &.home {
            background-color: transparent;
        }

        .branding {
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

        @include media-breakpoint-down(md) {
            &.navbar-expand {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .navbar-nav {
            margin-left: auto;
            margin-right: 150px;
            display: flex;
            justify-content: space-around;

            @include media-breakpoint-down(md) {
                margin: 0;
            }
        }
    }
</style>
