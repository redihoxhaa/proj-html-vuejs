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
    <div class="top-banner wrapper">
        <div class="custom-container d-flex">
            <span>{{ headerStore.slogan }}</span>
            <ul class="top-links d-flex text-uppercase">
                <li v-for="link in headerStore.topLinks"><a href="#">{{ link.title }}</a></li>
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
    letter-spacing: $normal-letter-spacing;

    .custom-container {
        padding: $top-banner-padding;
        gap: $top-banner-gap;
        font-size: $top-banner-font-size;
        color: $top-banner-text-color;

        .top-links {
            gap: $top-links-gap;
        }
    }
}
</style>