<script>
// IMPORTS

// /IMPORTS

export default {
    props: ['btnPaddingProp', 'contentText', 'btnColorProp', 'btnBgColorProp', 'btnBorderProp', 'btnBorderRadiusProp', 'btnFontSizeProp', 'btnFontWeightProp', 'btnWidthProp', 'btnHoverBgColorProp'],
    computed: {
        cssProps() {
            return {
                '--btn-padding': this.btnPadding,
                '--btn-color': this.btnColor,
                '--btn-bg-color': this.btnBgColor,
                '--btn-border': this.btnBorder,
                '--btn-border-radius': this.btnBorderRadius,
                '--btn-font-size': this.btnFontSize,
                '--btn-font-weight': this.btnFontWeight,
                '--btn-width': this.btnWidth,
                '--btn-hover-bg-color': this.btnHoverBgColor
            }
        }
    },
    data() {
        return {
            btnPadding: this.btnPaddingProp,
            btnColor: this.btnColorProp,
            btnBgColor: this.btnBgColorProp,
            btnBorder: this.btnBorderProp,
            btnBorderRadius: this.btnBorderRadiusProp,
            btnFontSize: this.btnFontSizeProp,
            btnFontWeight: this.btnFontWeightProp,
            btnWidth: this.btnWidthProp,
            btnHoverBgColor: this.btnHoverBgColorProp
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <button class="custom-btn text-uppercase" :style="cssProps">
        {{ contentText }}
    </button>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.custom-btn {
    padding: var(--btn-padding);
    color: var(--btn-color);
    background-color: var(--btn-bg-color);
    border: var(--btn-border);
    border-radius: var(btn-border-radius);
    font-size: var(--btn-font-size);
    font-weight: var(--btn-font-weight);
    width: var(--btn-width);

    &:hover {
        background-color: var(--btn-hover-bg-color);
    }
}
</style>