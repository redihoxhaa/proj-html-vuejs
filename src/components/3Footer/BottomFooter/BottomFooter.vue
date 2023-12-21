<script>
// IMPORTS
import Logo from '../../Utilities/Logo.vue';
import InfoLinks from './InfoLinks.vue';
import BackToTopButton from './BackToTopButton.vue';
import { globalStore } from '../../../globalStore';
// /IMPORTS

export default {
    components: { Logo, InfoLinks, BackToTopButton },
    data() {
        return {
            globalStore
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="custom-container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="custom-col-left d-flex align-items-center">
                    <Logo :widthProp="'73px'" :imgPath="globalStore.greyLogo.path"
                        :altContent="globalStore.greyLogo.altContent" :opacityProp="'0.6'" />
                    <span class="copyright-disclaimer">© Copyright 2020. All Rights Reserved.</span>
                </div>
                <div class="custom-col-right">
                    <InfoLinks />
                </div>
            </div>
        </div>
        <div class="back-to-top-btn">
            <BackToTopButton />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    background-color: $bottom-footer-bg-color;
    padding: 35px 0 28px;
    position: relative;

    .copyright-disclaimer {
        color: $bottom-footer-copyright-color;
        margin-left: 46px;
        font-size: 12px;
        letter-spacing: -0.2px;
    }

    .back-to-top-btn {
        margin-right: 10px;
    }
}
</style>