<script>
// IMPORTS

import AboutTheBlog from './AboutTheBlog.vue'
import RecentPosts from './RecentPosts.vue'
import RecentComments from './RecentComments.vue'
import Categories from './Categories.vue'

// /IMPORTS

export default {
    props: [],
    components: { AboutTheBlog, RecentPosts, RecentComments, Categories },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <AboutTheBlog />
    <RecentPosts />
    <RecentComments />
    <Categories />
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>