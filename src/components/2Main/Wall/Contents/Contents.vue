<script>
// IMPORTS

import MainContentTemplate from '../../../Utilities/MainContentTemplate.vue';
import PageNav from '../../../Utilities/PageNav.vue';
import { mainStore } from '../../../../mainStore';
// /IMPORTS

export default {
    props: [],
    components: { MainContentTemplate, PageNav, },
    data() {
        return {
            mainStore

        }
    },
    computed: {
        contentsPostSplicer() {
            let contents = mainStore.articles.map(elem => elem);
            return contents.splice(6, 5)
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <ul class="d-flex flex-column">
        <li v-for="article in contentsPostSplicer">
            <MainContentTemplate :titleText="article.titleText" :paragraphText="article.paragraphText"
                :authorName="article.authorName" :categories="article.categories" :comments="article.comments"
                :imgPath="article.imgPath ? article.imgPath : (article.littleImgPath ? article.littleImgPath : article.imgCollagePaths)"
                :pubDay="article.pubDay" :pubMonth="article.pubMonth" />
        </li>
        <li class="page-navigator">
            <PageNav />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
// USES
@use '../../../../assets/scss/partials/variables' as *;
// /USES

ul {
    width: 1050px;

    li {
        width: fit-content;
    }

    .page-navigator {
        margin-top: -11px;
        align-self: flex-end;
    }
}
</style>