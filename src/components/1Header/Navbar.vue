<script>
// IMPORTS

import { headerStore } from '../../headerStore';

// /IMPORTS

export default {
    data() {
        return {
            headerStore,
            selectedLink: null,
        }
    },
    methods: {
        makeActive(index) {
            this.selectedLink = index;
        }
    }
}
</script>

<template>
    <div class="custom-navbar custom-container">
        <nav class="d-flex justify-content-between align-items-center">
            <ul class="d-flex text-uppercase">
                <li v-for="(link, index) in headerStore.navLinks" @click="makeActive(index)"
                    :class="{ active: selectedLink === index }"><a href="#">{{
                        link.title }}</a></li>
            </ul>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </nav>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

nav {
    padding: 18px 0;

    ul {
        gap: 47px;
        font-weight: 700;
        color: $navbar-text-color;
        padding: 0;
        font-size: 15px;
        letter-spacing: -0.5px;
    }

    .fa-magnifying-glass {
        color: $navbar-text-color;
        font-size: 12px;
        border-left: 1px solid $navbar-icon-border-color;
        padding-left: 20px;
    }
}

.active {
    color: $navbar-active-text-color !important;
}
</style>