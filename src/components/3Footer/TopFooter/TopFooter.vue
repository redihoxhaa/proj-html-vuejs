<script>
// IMPORTS

import AboutTheBlog from './AboutTheBlog.vue'
import RecentPosts from './RecentPosts.vue'
import RecentComments from './RecentComments.vue'
import Categories from './Categories.vue'
import TopLabel from '../../Utilities/TopLabel.vue'
import { footerStore } from '../../../footerStore'

// /IMPORTS

export default {
    props: [],
    components: { AboutTheBlog, RecentPosts, RecentComments, Categories, TopLabel },
    data() {
        return {
            footerStore
        }
    },
    methods: {},
    mounted() { },
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
                <Categories />
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
    padding: 79px 0;
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
    }
}
</style>