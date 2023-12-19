<script>
// IMPORTS

import Jumbotron from './Jumbotron.vue';
import PostsRecap from './PostsRecap/PostsRecap.vue';
import ChooseCategory from './ChooseCategory.vue';
import Wall from './Wall/Wall.vue';

// /IMPORTS

export default {
    props: [],
    components: { Jumbotron, PostsRecap, ChooseCategory, Wall },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <main>
        <Jumbotron />
        <PostsRecap />
        <ChooseCategory />
        <Wall />


    </main>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>