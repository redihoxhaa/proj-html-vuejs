<script>
// IMPORTS
import { headerStore } from '../../headerStore';
// /IMPORTS

export default {
    data() {
        return {
            headerStore,
            selectedLink: 0,
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
            <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

nav {
    padding: $navbar-padding;

    ul {
        gap: $navbar-gap;
        font-weight: $navbar-font-weight;
        color: $navbar-text-color;
        padding: 0;
        font-size: $navbar-font-size;
        letter-spacing: $bold-letter-spacing;
    }

    .fa-magnifying-glass {
        color: $navbar-text-color;
        font-size: $navbar-icon-font-size;
        border-left: $navbar-icon-border-left;
        padding-left: $navbar-icon-padding-left;
    }
}

.active {
    color: $navbar-active-text-color !important;
}
</style>