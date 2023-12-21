<script>
// IMPORTS

import Contents from './Contents/Contents.vue';
import Feeds from './Feeds/Feeds.vue';

// /IMPORTS

export default {
    props: [],
    components: { Contents, Feeds },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="custom-container">
        <div class="wrapper d-flex">
            <Contents />
            <Feeds />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.custom-container {
    padding: $wall-padding;
}
</style>