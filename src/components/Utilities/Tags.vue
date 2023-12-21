<script>
// IMPORTS
import { globalStore } from '../../globalStore';
// /IMPORTS

export default {
    props: [],
    components: {},
    data() {
        return {
            globalStore
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <ul class="d-flex text-uppercase">
        <li v-for="tag in globalStore.tags">{{ tag }}</li>
    </ul>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;

// /USES
ul {
    gap: 8px;

    li {
        font-weight: 700;
        font-size: 11px;
        color: #FFFFFF;
        background-color: #212529;
        padding: 0 7px;
        border-radius: 10px;
    }
}
</style>