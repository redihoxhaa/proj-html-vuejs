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
        <nav>
            <ul class="d-flex text-uppercase">
                <li v-for="(link, index) in headerStore.navLinks" @click="makeActive(index)"
                    :class="{ active: selectedLink === index }"><a href="#">{{
                        link.title }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

ul {
    gap: 54px;
    padding: 20px 0;
    font-weight: 700;
    color: $navbar-text-color;
}

.active {
    color: $navbar-active-text-color !important;
}
</style>