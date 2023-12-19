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
        <Logo />
        <Navbar />
    </header>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>