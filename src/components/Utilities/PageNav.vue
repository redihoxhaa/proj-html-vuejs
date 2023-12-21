<script>
// IMPORTS

import { globalStore } from '../../globalStore';

// /IMPORTS

export default {
    props: [],
    components: {},
    data() {
        return {
            globalStore,
            selectedPage: 0,
        }
    },
    methods: {
        makeActive(index) {
            this.selectedPage = index;
        },
        prevPage() {
            if (this.selectedPage > 0) {
                this.selectedPage--
            }
        },
        nextPage() {
            if (this.selectedPage < globalStore.pageNumbers.length - 1) {
                this.selectedPage++
            }
        }
    },

    mounted() { },
}
</script>

<template>
    <ul class="page-scroller d-flex justify-content-end align-items-center">
        <li @click="prevPage()"><font-awesome-icon icon="fa-solid fa-chevron-left" /></li>
        <li v-for="(page, index) in globalStore.pageNumbers" :class="{ active: selectedPage === index }"
            @click="makeActive(index)">
            {{ page }}
        </li>
        <li @click="nextPage()"><font-awesome-icon icon="fa-solid fa-chevron-right" /></li>
    </ul>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.page-scroller {
    width: fit-content;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    overflow: hidden;
    user-select: none;

    li {
        padding: 6px 12px;
        border-right: 1px solid #D9D9D9;
        font-size: 14px;
        color: #0088CC;
        cursor: pointer;

        .fa-chevron-left,
        .fa-chevron-right {
            font-size: 10px;
            vertical-align: baseline;
        }

        &:last-child {
            border: none;
        }
    }

    .active {
        background-color: #0088CC;
        color: white;
    }
}
</style>