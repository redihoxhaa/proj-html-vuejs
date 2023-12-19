<script>
// IMPORTS
import { globalStore } from '../../globalStore';
// /IMPORTS
export default {
    data() {
        return {
            globalStore
        }
    },

}
</script>

<template>
    <div class="custom-container">
        <div class="pic-container">
            <img :src="globalStore.logo.path" :alt="globalStore.logo.alt">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pic-container {
    width: 100px;
    padding: 40px 0;
}
</style>