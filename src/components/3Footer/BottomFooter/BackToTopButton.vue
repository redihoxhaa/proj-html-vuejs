<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>


<template>
    <div class="scroll-to-top" @click="scrollToTop">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.scroll-to-top {
    position: absolute;
    bottom: 0px;
    right: 20px;
    padding: 10px 19px;
    background-color: $backtotop-bg-color;
    color: $backtotop-icon-color;
    cursor: pointer;
    border-radius: 5px 5px 0 0;

    .fa-chevron-up {
        font-size: 12px;
    }
}
</style>