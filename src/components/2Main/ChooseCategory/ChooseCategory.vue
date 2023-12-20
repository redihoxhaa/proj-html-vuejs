<script>
// IMPORTS
import { globalStore } from '../../../globalStore';
import Button from '../../Utilities/Button.vue'
// /IMPORTS

export default {
    props: [],
    components: { Button },
    data() {
        return {
            globalStore,
            startIndex: 0,
            visibileCategories: 6
        }
    },
    computed: {
        categorySplicer() {

            let categories = globalStore.categories.map(elem => elem);
            return categories.splice(this.startIndex, this.visibileCategories)
        }
    },
    methods: {
        nextCategory() {
            if (this.startIndex < globalStore.categories.length - this.visibileCategories) {
                this.startIndex++
            }
        },
        prevCategory() {
            if (this.startIndex > 0) { this.startIndex-- }
        }
    },
    mounted() { },
}
</script>

<template>
    <div class="wrapper">
        <div class="custom-container">
            <ul class="d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="fa-solid fa-chevron-left" @click="prevCategory()" />
                <ul class="d-flex">
                    <li v-for="category in categorySplicer">
                        <Button :btnPaddingProp="'17px 0px'" :contentText="category" :btnColorProp="'#FFFFFF'"
                            :btnFontSizeProp="'12px'" :btnFontWeightProp="'700'" :btnBgColorProp="'#212529'"
                            :btnBorderProp="'none'" :btnBorderRadiusProp="'0px'" :btnWidthProp="'185px'"
                            :btnHoverBgColorProp="'#32383e'" />
                    </li>
                </ul>
                <font-awesome-icon icon="fa-solid fa-chevron-right" @click="nextCategory()" />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    background-color: $cc-bg-color;
    padding: $cc-padding;

    ul {
        gap: 38px;

        .fa-chevron-left,
        .fa-chevron-right {
            font-size: $cc-chevron-size;
            color: $cc-chevron-color;
            cursor: pointer;
        }
    }
}
</style>