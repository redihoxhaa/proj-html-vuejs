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
            mainStore,
            startIndex: 6,
            postsToShow: 5
        }
    },
    computed: {
        contentsPostSplicer() {
            let contents = mainStore.articles.map(elem => elem);
            return contents.splice(this.startIndex, this.postsToShow)
        }
    },
    methods: {
        prevPage() {
            if (this.startIndex > this.postsToShow) {
                this.startIndex -= this.postsToShow
            }
        },
        nextPage() {
            if (this.startIndex < mainStore.articles.length - this.postsToShow) {
                this.startIndex += this.postsToShow
            }
        },
        changePage(page) {
            console.log(page)
            this.startIndex = (this.postsToShow * page) - this.postsToShow + 1;
            console.log(page)
        }

    },
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
            <PageNav @prevPage="prevPage()" @nextPage="nextPage()" @pageClick="changePage" />
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
        width: 100%;
    }

    .page-navigator {
        margin-top: -11px;
        align-self: flex-end;
        width: fit-content;
    }
}
</style>