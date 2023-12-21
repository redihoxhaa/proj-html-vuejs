<script>
// IMPORTS
// /IMPORTS

export default {
    props: ['arrayToSearchIn', 'badgePaddingProp', 'badgeColorProp', 'badgeBgColorProp', 'badgeBorderProp', 'badgeBorderRadiusProp', 'badgeFontSizeProp', 'badgeFontWeightProp', 'badgeWidthProp', 'badgeHeightProp', 'badgeHoverBgColorProp', 'badgeSpaceProp', 'badgeGapProp', 'badgeLetterSpacingProp'],
    components: {},
    data() {
        return {
            badgePadding: this.badgePaddingProp,
            badgeColor: this.badgeColorProp,
            badgeBgColor: this.badgeBgColorProp,
            badgeBorder: this.badgeBorderProp,
            badgeBorderRadius: this.badgeBorderRadiusProp,
            badgeFontSize: this.badgeFontSizeProp,
            badgeFontWeight: this.badgeFontWeightProp,
            badgeWidth: this.badgeWidthProp,
            badgeHeight: this.badgeHeightProp,
            badgeHoverBgColor: this.badgeHoverBgColorProp,
            badgeSpace: this.badgeSpaceProp,
            badgeGap: this.badgeGapProp,
            badgeLetterSpacing: this.badgeLetterSpacingProp,
        }
    },
    computed: {
        cssProps() {
            return {
                '--badge-padding': this.badgePadding,
                '--badge-color': this.badgeColor,
                '--badge-bg-color': this.badgeBgColor,
                '--badge-border': this.badgeBorder,
                '--badge-border-radius': this.badgeBorderRadius,
                '--badge-font-size': this.badgeFontSize,
                '--badge-font-weight': this.badgeFontWeight,
                '--badge-width': this.badgeWidth,
                '--badge-height': this.badgeHeight,
                '--badge-hover-bg-color': this.badgeHoverBgColor,
                '--badge-gap': this.badgeGap,
                '--badge-letter-spacing': this.badgeLetterSpacing
            }
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <ul class="badges-list d-flex text-uppercase" :style="cssProps">
        <li class=" single-badge" v-for="tag in arrayToSearchIn">{{ tag }}</li>
    </ul>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;

// /USES
.badges-list {
    gap: var(--badge-gap);
    flex-wrap: wrap;

    .single-badge {

        white-space: var(--badge-space);
        letter-spacing: var(--badge-letter-spacing);
        padding: var(--badge-padding);
        color: var(--badge-color);
        background-color: var(--badge-bg-color);
        border: var(--badge-border);
        border-radius: var(--badge-border-radius);
        font-size: var(--badge-font-size);
        font-weight: var(--badge-font-weight);
        width: var(--badge-width);
        height: var(--badge-height);
    }
}
</style>



