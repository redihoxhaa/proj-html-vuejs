<script>
// IMPORTS
import { headerStore } from '../../headerStore';
// /IMPORTS

export default {
    data() {
        return {
            headerStore
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="custom-container d-flex">
            <span>{{ headerStore.slogan }}</span>
            <ul class="top-links d-flex text-uppercase">
                <a href="#" v-for="link in headerStore.topLinks">{{ link.title }}</a>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    background-color: $top-banner-bg-color;

    .custom-container {
        padding: 20px 0;
        gap: 25px;
        font-size: 13px;
        color: $top-banner-text-color;

        .top-links {
            gap: 25px;
        }
    }
}
</style>