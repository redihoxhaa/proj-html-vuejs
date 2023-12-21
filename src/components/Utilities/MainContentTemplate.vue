<script>
// IMPORTS

import CalendarElement from './CalendarElement.vue';
import ImagesToGrid from './ImagesToGrid.vue';

// /IMPORTS

export default {
    props: ['imgPath', 'titleText', 'paragraphText', 'authorName', 'categories', 'comments'],
    components: { CalendarElement, ImagesToGrid },
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
        <section>
            <div class="custom-col-left">
                <CalendarElement />
            </div>
            <div class="custom-col-right">
                <h2>{{ titleText }}</h2>
                <p>{{ paragraphText }}</p>
                <div class="bottom-infos d-flex justify-space-between">
                    <div class="engagement">
                        <font-awesome-icon icon="fa-regular fa-user" />
                        <span>By <a href="#">{{ authorName }}</a></span>
                        <font-awesome-icon icon="fa-regular fa-folder" />
                        <span><a href="#">{{ categoriesSplicer }}</a></span>
                        <font-awesome-icon icon="fa-regular fa-comments" />
                        <span><a href="#">{{ comments }} Comments</a></span>

                    </div>
                    <button class="text-uppercase">Read More</button>
                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
