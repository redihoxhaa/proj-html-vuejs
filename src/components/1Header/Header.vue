<script>
// IMPORTS
import TopBanner from './TopBanner.vue';
import Logo from '../Utilities/Logo.vue';
import Navbar from './Navbar.vue';
import { globalStore } from '../../globalStore';
// /IMPORTS

export default {
    props: [],
    components: { TopBanner, Logo, Navbar },
    data() {
        return {
            globalStore
        }
    },

}
</script>

<template>
    <header>
        <TopBanner />
        <div class="logo-wrapper">
            <div class="custom-container">

                <Logo :widthProp="'100px'" :imgPath="globalStore.logo.path" :altContent="globalStore.logo.altContent"
                    :paddingProp="'36px 0'" />
            </div>
        </div>
        <Navbar />
    </header>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.logo-wrapper {
    border-bottom: 1px solid $solid-border-color;
}
</style>