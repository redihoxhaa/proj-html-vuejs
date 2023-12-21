<script>
// IMPORTS
import { footerStore } from '../../../footerStore';
// /IMPORTS

export default {
    props: [],
    components: {},
    data() {
        return {
            footerStore
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="body">
        <p>{{ footerStore.lastBlogPost.firstLine }}</p>
        <p class="rest-of-the-post">{{ footerStore.lastBlogPost.restOfThePost }}</p>
    </div>
    <div class="view-more d-flex align-items-center">
        <h4 class="text-uppercase">View More</h4>
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;

// /USES



p {
    color: $top-footer-main-text-color;
    font-size: 13px;
    letter-spacing: -0.2px;
    line-height: 25px;
    width: 418px;

}

.rest-of-the-post {
    overflow: hidden;
    text-overflow: ellipsis;


}

h4 {
    color: $top-footer-white-text-color;
    font-weight: $pr-title-font-weight;
    font-size: 12px;
    letter-spacing: -0.2px;
    padding-right: 7px;
}

.view-more {

    cursor: pointer;

    .fa-chevron-right {
        color: $top-footer-white-text-color;
        font-size: 10px;

    }
}
</style>