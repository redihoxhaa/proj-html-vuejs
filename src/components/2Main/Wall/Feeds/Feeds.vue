<script>
// IMPORTS
import Tweet from '../../../Utilities/Tweet.vue'
import ImagesToGrid from '../../../Utilities/ImagesToGrid.vue';
import BadgeList from '../../../Utilities/BadgeList.vue';
import SocialCallToAction from '../../../Utilities/SocialCallToAction.vue';
import { mainStore } from '../../../../mainStore';
import { globalStore } from '../../../../globalStore';
// /IMPORTS

export default {
    components: { Tweet, ImagesToGrid, BadgeList, SocialCallToAction },
    data() {
        return {
            mainStore,
            globalStore
        }
    },
}
</script>

<template>
    <div class="wrapper d-flex flex-column">
        <section class="latest-from-twitter">
            <h4 class="text-uppercase">Latest from Twitter</h4>
            <ul>
                <li v-for="tweet in mainStore.tweets">
                    <Tweet :content="tweet.content" :date="tweet.date" />
                </li>
            </ul>
        </section>

        <section class="photos-from-instagram">
            <h4 class="text-uppercase">Photos From Instagram</h4>
            <ImagesToGrid :images="mainStore.tweetGridPaths" />
        </section>

        <section class="tags">
            <h4 class="text-uppercase">Tags</h4>
            <BadgeList :arrayToSearchIn="globalStore.tags" :badgePaddingProp="'0 7px'" :badgeColorProp="'#FFFFFF'"
                :badgeBgColorProp="'#212529'" :badgeBorderRadiusProp="'10px'" :badgeFontSizeProp="'11px'"
                :badgeFontWeightProp="'700'" :badgeGapProp="'8px'" />
        </section>

        <section class="find-us-on-facebook">
            <h4 class="text-uppercase">Find us on Facebook</h4>
            <SocialCallToAction />
        </section>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    margin-left: 30px;

    section {
        margin-bottom: 25px;

        h4 {
            font-weight: $pr-title-font-weight;
            font-size: $pr-title-font-size;
            padding-bottom: 17px;
        }
    }

    .photos-from-instagram {
        width: 330px;
        margin-bottom: 25px;
    }

    .tags {
        h4 {
            padding-bottom: 14px;
        }
    }

    .find-us-on-facebook {
        margin-top: 71px;


        h4 {
            padding-bottom: 14px;
        }
    }

}
</style>