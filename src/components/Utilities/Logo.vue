<script>
// IMPORTS

// /IMPORTS

export default {
    props: ['widthProp', 'altContent', 'imgPath', 'paddingProp', 'opacityProp'],
    components: {},
    data() {
        return {
            width: this.widthProp,
            padding: this.paddingProp,
            opacity: this.opacityProp,
        }
    },
    computed: {
        cssProps() {
            return {
                '--logo-width': this.width,
                '--logo-padding': this.padding,
                '--logo-opacity': this.opacity,
            }
        }
    },
}
</script>

<template>
    <div class="pic-container" :style="cssProps">
        <img :src="imgPath" :alt="altContent">
    </div>
</template>

<style lang="scss" scoped>
.pic-container {
    width: var(--logo-width);
    padding: var(--logo-padding);
    opacity: var(--logo-opacity);

    img {
        width: 100%;
    }
}
</style>