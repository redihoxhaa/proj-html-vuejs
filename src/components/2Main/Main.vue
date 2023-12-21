<script>
// IMPORTS
import Jumbotron from './Jumbotron/Jumbotron.vue';
import PostsRecap from './PostsRecap/PostsRecap.vue';
import ChooseCategory from './ChooseCategory/ChooseCategory.vue';
import Wall from './Wall/Wall.vue';
// /IMPORTS

export default {
    components: { Jumbotron, PostsRecap, ChooseCategory, Wall },
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

<style lang="scss" scoped></style>