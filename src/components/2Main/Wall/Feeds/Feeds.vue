<script>
// IMPORTS

import LatestFromTwitter from './LatestFromTwitter.vue';
import PhotosFromInstagram from './PhotosFromInstagram.vue';
import Tags from './Tags.vue';
import SocialCallToAction from './SocialCallToAction.vue';


// /IMPORTS

export default {
    props: [],
    components: { LatestFromTwitter, PhotosFromInstagram, Tags, SocialCallToAction },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <LatestFromTwitter />
    <PhotosFromInstagram />
    <Tags />
    <SocialCallToAction />
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>