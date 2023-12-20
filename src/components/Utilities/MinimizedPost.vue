<script>
// IMPORTS



// /IMPORTS

export default {
    props: ['imgPathProp', 'titleText', 'pubMonthProp', 'pubDayProp', 'pubYearProp'],
    components: {},
    data() {
        return {

        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="wrapper d-flex">
        <div class="pic-container">
            <img :src="imgPathProp" :alt="titleText">
        </div>
        <div class="content">
            <h5>{{ titleText }}</h5>
            <div class="date">
                {{ pubMonthProp }} {{ pubDayProp }}, {{ pubYearProp }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    gap: 12px;

    .pic-container {
        width: 50px;
        height: 50px;

        img {
            height: 100%;
            object-fit: cover;

        }
    }

    h5 {
        font-size: $mp-title-font-size;
        font-weight: $mp-title-font-weight;
        letter-spacing: $mp-title-letter-spacing;
    }

    .date {
        padding-top: $mp-date-padding-top;
        font-size: $mp-date-font-size;
        color: $mp-date-font-color;
    }
}
</style>
