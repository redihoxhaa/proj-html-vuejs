<script>
// IMPORTS

import { mainStore } from '../../../mainStore';
import MinimizedPost from '../../Utilities/MinimizedPost.vue';
import MinimizedAuthor from '../../Utilities/MinimizedAuthor.vue';
import WidePicCard from '../../Utilities/WidePicCard.vue';


// /IMPORTS

export default {
    props: [],
    components: { MinimizedPost, MinimizedAuthor, WidePicCard },
    data() {
        return {
            mainStore
        }
    },
    computed: {
        popularPostSplicer() {
            let popularPosts = mainStore.articles.map(elem => elem);
            return popularPosts.splice(7, 5)
        },

        recentPostSplicer() {
            let popularPosts = mainStore.articles.map(elem => elem);
            return popularPosts.splice(12, 5)
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="post-recap wrapper">
        <div class="custom-container d-flex">
            <section>
                <h4 class="text-uppercase">Popular Posts</h4>
                <ul class="popular-posts-cards">
                    <li class="minimized-card" v-for="card in popularPostSplicer">
                        <MinimizedPost
                            :imgPathProp="card.littleImgPath ? card.littleImgPath : (card.imgPath ? card.imgPath : card.imgCollagePaths[0])"
                            :titleText="card.titleText" :pubMonthProp="card.pubMonth" :pubDayProp="card.pubDay"
                            :pubYearProp="card.pubYear" />
                    </li>
                </ul>
            </section>

            <section>
                <h4 class="text-uppercase">Recent Posts</h4>
                <ul class="recent-posts-cards">
                    <li class="minimized-card" v-for="card in recentPostSplicer">
                        <MinimizedPost :imgPathProp="card.littleImgPath" :titleText="card.titleText"
                            :pubMonthProp="card.pubMonth" :pubDayProp="card.pubDay" :pubYearProp="card.pubYear" />
                    </li>
                </ul>
            </section>

            <section>
                <div>
                    <h4 class="text-uppercase">Featured Posts</h4>

                    <WidePicCard :bgPathProp="mainStore.articles[14].imgPath" :titleText="mainStore.articles[14].titleText"
                        :paragraphText="mainStore.articles[14].paragraphText"
                        :badgeText="mainStore.articles[14].categories[0]" />
                </div>
                <div>
                    <h4 class="text-uppercase">Featured Author</h4>
                    <MinimizedAuthor />
                </div>

            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;

// /USES
.post-recap {
    padding: $post-recap-padding;

    .custom-container {
        gap: $pr-section-gap;

        section {

            height: $pr-section-height;
            width: calc((100% - $pr-section-gap * 2) / $pr-section-columns);

            h4 {
                font-weight: $pr-title-font-weight;
                font-size: $pr-title-font-size;
                padding-bottom: 3px;
            }

            li {
                padding: 15px 0;
                border-bottom: 1px dotted $dotted-border-color;

                &:last-child {
                    border: none;
                }
            }
        }
    }
}
</style>