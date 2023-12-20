<script>
// IMPORTS

import MinimizedPost from '../../Utilities/MinimizedPost.vue';
import FeaturedPosts from './FeaturedPosts.vue';
import FeaturedAuthor from './FeaturedAuthor.vue';

// /IMPORTS

export default {
    props: [],
    components: { MinimizedPost, FeaturedPosts, FeaturedAuthor },
    data() {
        return {

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
                <h4>Simple</h4>
                <MinimizedPost />
            </section>

            <section>
                <MinimizedPost />
            </section>

            <section>
                <FeaturedPosts />
                <FeaturedAuthor />
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
            background-color: red;
            height: $pr-section-height;
            width: calc((100% - $pr-section-gap * 2) / $pr-section-columns);
        }
    }
}
</style>