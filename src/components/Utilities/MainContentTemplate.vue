<script>
// IMPORTS

import CalendarElement from './CalendarElement.vue';
import ImagesToGrid from './ImagesToGrid.vue';
import Button from './Button.vue';


// /IMPORTS

export default {
    props: ['imgPath', 'titleText', 'paragraphText', 'authorName', 'categories', 'comments', 'pubDay', 'pubMonth'],
    components: { CalendarElement, ImagesToGrid, Button },
    data() {
        return {

        }
    },
    computed: {
        categoriesSplicer() {
            let contents = this.categories.map(elem => elem);
            if (contents.length >= 2) {
                return contents.splice(0, 2).join(', ')
            }
            return contents[0]
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="custom-content">
        <div class="pic-container">
            <img :src="imgPath" :alt="titleText" v-if="typeof imgPath === 'string'">
            <ImagesToGrid :images="imgPath" v-else />

        </div>
        <section class="infos d-flex">
            <div class="custom-col-left">
                <CalendarElement :pubDay="pubDay" :pubMonth="pubMonth" />
            </div>
            <div class="custom-col-right">
                <h2><a href="#">{{ titleText }}</a></h2>
                <p>{{ paragraphText }}</p>
                <div class="bottom-infos d-flex justify-space-between">
                    <div class="engagement d-flex align-items-center">
                        <font-awesome-icon icon="fa-regular fa-user" />
                        <span>By <a href="#">{{ authorName }}</a></span>
                        <font-awesome-icon icon="fa-regular fa-folder" />
                        <span><a href="#">{{ categoriesSplicer }}</a></span>
                        <font-awesome-icon icon="fa-regular fa-comments" />
                        <span><a href="#">{{ comments }} Comments</a></span>

                    </div>
                    <div class="custom-btn">
                        <Button :btnPaddingProp="'3px 8px'" :contentText="'READ MORE'" :btnColorProp="'#777777'"
                            :btnFontSizeProp="'10px'" :btnFontWeightProp="'normal'
                                " :btnBgColorProp="'transparent'" :btnBorderProp="'1px solid #D9D9D9'"
                            :btnBorderRadiusProp="'4px'" :btnSpaceProp="'nowrap'" btnHeightProp="fit-content" />
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
// USES

@use '../../assets/scss/partials/variables' as *;

.custom-content {

    .infos {
        margin-top: 25px;

        .custom-col-right {
            margin-bottom: 50px;
            padding-bottom: 3px;
            border-bottom: 1px solid #EEEEEE;

            h2 {
                font-weight: 600;
                font-size: 25px;
                letter-spacing: -1.1px;
                color: #212529;
            }

            p {
                font-size: 14px;
                line-height: 26px;
                margin-top: 16px;
                color: #777777;
            }

            .custom-btn {
                margin-top: 3px;
                margin-right: 4px;
            }

            .engagement {
                font-size: 13px;
                color: #777777;
                letter-spacing: -0.2px;
                gap: 6px;
                width: 100%;
                margin-top: 7px;
                padding-bottom: 28px;


                span {
                    margin-right: 5px;

                    a {
                        color: #0088CC !important;
                    }
                }
            }
        }
    }
}

// /USES
</style>
