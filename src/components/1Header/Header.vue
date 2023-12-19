<script>
// IMPORTS
import TopBanner from './TopBanner.vue';
import Logo from './Logo.vue';
import Navbar from './Navbar.vue';

// /IMPORTS

export default {
    props: [],
    components: { TopBanner, Logo, Navbar },
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <header>
        <TopBanner />
        <div class="logo-wrapper">
            <Logo />
        </div>
        <Navbar />
    </header>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.logo-wrapper {
    border: 2px solid $solid-border-color;
}
</style>