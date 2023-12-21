<script>
export default {
    props: ['text'],
}
</script>

<template>
    <div>{{ text }}</div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

div {
    color: $front-card-text-color;
    background-color: $front-card-bg-color;
    width: fit-content;
    font-family: "Shadows Into Light";
    padding: 8px 21px;
    font-size: 20px;
    position: absolute;
    top: -16px;

    &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: -10px;
        width: 10px;
        height: 16px;
        background: linear-gradient(301deg, rgba(0, 85, 128, 1) 45%, rgba(255, 255, 255, 0) 50%, rgba(0, 85, 128, 0) 100%);
    }

}
</style>