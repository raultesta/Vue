<template>
    <b-navbar class="main-nav" type="light" variant="transparent">
        <b-navbar-brand href="#">
            <div class="branding">
                <h1>MAIN TITLE</h1>
                <div class="prof-titles">
                    <span>Role 1</span>
                    <span>Role 2</span>
                    <span>Role 3</span>
                    <span>Role 4</span>
                </div>
            </div>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <b-button pill variant="primary">Button</b-button>
            </b-nav-item>
            <b-nav-item href="#">
                <b-button pill variant="primary">Button</b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<style lang="scss" scoped>
.branding {
    width: 700px;

    .prof-titles {
        span {
            margin-right: 15px;
        }
    }
}

.navbar-nav {
    width: 200px;
    margin-right: 135px;
    display: flex;
    justify-content: space-around;
}
</style>
