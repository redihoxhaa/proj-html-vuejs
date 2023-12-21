<script>
export default {}
</script>

<template>
    <div class="d-flex align-items-center">
        <a href="#"> <font-awesome-icon icon="fa-solid fa-chevron-right" />
            FAQ's</a>
        <a href="#"> <font-awesome-icon icon="fa-solid fa-chevron-right" />
            Sitemap</a>
        <a href="#"><font-awesome-icon icon="fa-solid fa-chevron-right" />
            Contact Us</a>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

div {
    color: $bottom-footer-main-text-color;
    font-size: 11px;
    gap: 17px;

    .fa-chevron-right {
        font-size: 9px;
        margin-right: 7px;
    }
}
</style>