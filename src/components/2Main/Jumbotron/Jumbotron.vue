<script>
// IMPORTS

import { mainStore } from '../../../mainStore';
import WidePicCard from '../../Utilities/WidePicCard.vue';

// /IMPORTS

export default {
    props: [],

    components: { WidePicCard },
    data() {
        return {
            mainStore
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="jumbotron">
        <div class="custom-container">
            <ul class="d-flex flex-wrap">
                <li v-for="card in mainStore.articles.slice(0, 6)">
                    <WidePicCard :bgPathProp="card.imgPath" :titleText="card.titleText" :paragraphText="card.paragraphText"
                        :badgeText="card.categories[0]" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.jumbotron {

    padding: $jumbotron-padding;
    background-color: $jumbotron-bg-color;

    ul {
        gap: $jumbotron-gap;

        li {
            width: calc((100% - ($jumbotron-gap * 2)) / $jumbotron-img-row);
            height: $jumbotron-card-height;

        }
    }
}
</style>