<script>
// IMPORTS

import PopularPosts from './PopularPosts.vue';
import RecentPosts from './RecentPosts.vue';
import FeaturedPosts from './FeaturedPosts.vue';
import FeaturedAuthor from './FeaturedAuthor.vue';

// /IMPORTS

export default {
    props: [],
    components: { PopularPosts, RecentPosts, FeaturedPosts, FeaturedAuthor },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <PopularPosts />
    <RecentPosts />

    <FeaturedPosts />
    <FeaturedAuthor />
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>