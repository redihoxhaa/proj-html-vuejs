<script>
// IMPORTS

import AboutTheBlog from './AboutTheBlog.vue'
import RecentPosts from './RecentPosts.vue'
import RecentComments from './RecentComments.vue'
import Categories from './Categories.vue'
import TopLabel from '../../Utilities/TopLabel.vue'

// /IMPORTS

export default {
    props: [],
    components: { AboutTheBlog, RecentPosts, RecentComments, Categories, TopLabel },
    data() {
        return {

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
            <div class="sections">
                <section class="about-the-blog">
                    <h4 class="text-uppercase">About The Blog</h4>
                    <AboutTheBlog />
                </section>

                <RecentPosts />
                <RecentComments />
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
            margin-right: 65px;
        }
    }
}
</style>