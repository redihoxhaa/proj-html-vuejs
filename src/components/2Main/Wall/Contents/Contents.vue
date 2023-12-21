<script>
// IMPORTS

import MainContentTemplate from '../../../Utilities/MainContentTemplate.vue';
import ContentsPageNav from './ContentsPageNav.vue';
import { mainStore } from '../../../../mainStore';
// /IMPORTS

export default {
    props: [],
    components: { MainContentTemplate, ContentsPageNav, },
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
    <ul>
        <li v-for="article in contentsPostSplicer">
            <MainContentTemplate :titleText="article.titleText" :paragraphText="article.paragraphText"
                :authorName="article.authorName" :categories="article.categories" :comments="article.comments"
                :imgPath="article.imgPath ? article.imgPath : (article.littleImgPath ? article.littleImgPath : article.imgCollagePaths)"
                :pubDay="article.pubDay" :pubMonth="article.pubMonth" />
        </li>
    </ul>

    <ContentsPageNav />
</template>

<style lang="scss" scoped>
// USES
@use '../../../../assets/scss/partials/variables' as *;
// /USES

ul {
    li {

        width: 1050px;
    }
}
</style>