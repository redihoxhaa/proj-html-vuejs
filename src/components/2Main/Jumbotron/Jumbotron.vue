<script>
// IMPORTS
import { mainStore } from '../../../mainStore';
import WidePicCard from '../../Utilities/WidePicCard.vue';
// /IMPORTS

export default {
    components: { WidePicCard },
    data() {
        return {
            mainStore
        }
    },
    computed: {
        jumbotronPostSplicer() {
            let jumbotronPosts = mainStore.articles.map(elem => elem);
            return jumbotronPosts.splice(0, 6)
        }
    },
}
</script>

<template>
    <div class="jumbotron">
        <div class="custom-container">
            <ul class="d-flex flex-wrap">
                <li v-for="card in jumbotronPostSplicer">
                    <a href="#">
                        <WidePicCard :bgPathProp="card.imgPath" :titleText="card.titleText"
                            :paragraphText="card.paragraphText" :badgeText="card.categories[0]" />
                    </a>
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