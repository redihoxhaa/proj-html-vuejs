<script>
// IMPORTS

import Badge from './Badge.vue';

// /IMPORTS

export default {
    props: ['bgPathProp', 'titleText', 'paragraphText', 'badgeText'],
    computed: {
        cssProps() {
            return {
                '--bg-path': this.bgPath,
            }
        }
    },
    components: { Badge },
    data() {
        return {
            bgPath: `url(${this.bgPathProp})`

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="custom-card" :style="cssProps">
        <div class="opacity-layer d-flex flex-column justify-content-end">
            <div class="content">
                <Badge :badgeText="badgeText" />
                <h3>{{ titleText }}</h3>
                <p>{{ paragraphText }}</p>
            </div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.custom-card {
    height: 100%;
    background-image: var(--bg-path);
    background-size: cover;
    position: relative;

    &:hover p {
        display: block;
    }

    .opacity-layer {
        position: absolute;
        inset: 0 0 0 0;
        padding: $card-padding;
        background-color: rgba($color: $card-opacity-layer-color, $alpha: $card-opacity-layer-alpha);
    }

    h3 {
        font-weight: $card-font-weight;
        color: $card-title-color;
        padding: 0;
        font-size: $card-title-size;
        letter-spacing: $bold-letter-spacing;
    }

    p {
        display: none;
        font-weight: $card-font-weight;
        color: $card-p-color;
        line-height: $card-p-line-height;
        padding-top: $card-p-padding-top;
        font-size: $card-p-size;
        letter-spacing: $card-p-spacing;

    }
}
</style>