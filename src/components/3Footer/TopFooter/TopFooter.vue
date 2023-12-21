<script>
// IMPORTS
import AboutTheBlog from './AboutTheBlog.vue'
import RecentPosts from './RecentPosts.vue'
import RecentComments from './RecentComments.vue'
import BadgeList from '../../Utilities/BadgeList.vue'
import TopLabel from '../../Utilities/TopLabel.vue'
import { footerStore } from '../../../footerStore'
import { globalStore } from '../../../globalStore'
// /IMPORTS

export default {

    components: { AboutTheBlog, RecentPosts, RecentComments, BadgeList, TopLabel },
    data() {
        return {
            footerStore,
            globalStore
        }
    },
}
</script>

<template>
    <div class="top-footer">
        <div class="custom-container">
            <TopLabel :text="'Get in Touch'" />
            <div class="sections d-flex">
                <section class="about-the-blog">
                    <h4 class="text-uppercase">About The Blog</h4>
                    <AboutTheBlog />
                </section>

                <section class="recent-posts">
                    <h4 class="text-uppercase">Recent Posts</h4>
                    <ul>
                        <li v-for="post in footerStore.recentPosts">
                            <RecentPosts :imgPath="post.imgPath" :content="post.content" :date="post.date" />
                        </li>
                    </ul>
                </section>

                <section class="recent-comments">
                    <h4 class="text-uppercase">Recent Comments</h4>
                    <ul>
                        <li v-for="comment in footerStore.recentComments">
                            <RecentComments :user="comment.user" :post="comment.post" :date="comment.date" />
                        </li>
                    </ul>
                </section>

                <section class="categories">
                    <h4 class="text-uppercase">Categories</h4>
                    <BadgeList :arrayToSearchIn="globalStore.categories" :badgePaddingProp="'6px 7px'"
                        :badgeColorProp="'#FFFFFF'" :badgeBgColorProp="'#000000'" :badgeBorderRadiusProp="'3px'"
                        :badgeFontSizeProp="'10px'" :badgeFontWeightProp="'700'" :badgeGapProp="'7.5px'"
                        :badgeLetterSpacingProp="'-0.3px'" />
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.top-footer {
    position: relative;
    padding: 79px 0 66px;
    background-color: $top-footer-bg-color;
    margin-top: 20px;

    .sections {
        section {
            margin-bottom: 25px;

            h4 {
                color: $top-footer-white-text-color;
                font-weight: $pr-title-font-weight;
                font-size: 12px;
                padding-bottom: 17px;
                letter-spacing: -0.2px;
            }
        }

        .about-the-blog {
            margin-right: 63px;
        }

        .recent-posts {
            margin-right: 49px;
        }

        .recent-comments {
            margin-right: 42px;
        }

        .categories {
            width: 200px;

            h4 {
                padding-bottom: 19px;
            }
        }
    }
}
</style>