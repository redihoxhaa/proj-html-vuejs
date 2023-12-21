<script>
// IMPORTS



// /IMPORTS

export default {
    props: ['pubDay', 'pubMonth'],
    components: {},
    data() {
        return {

        }
    },
    computed: {
        monthTrimmer() {
            let trimmedMonth = this.pubMonth
            return trimmedMonth.slice(0, 3)
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <div class="wrapper">
        <div class="day text-center">
            {{ pubDay }}
        </div>
        <div class="month text-center text-uppercase">
            {{ monthTrimmer }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;

// /USES
.wrapper {
    width: 37px;

    .day {
        color: $calendar-main-color;
        background-color: $calendar-secondary-color;
        padding: $calendar-day-padding;
        font-size: $calendar-day-font-size;
        font-weight: $calendar-day-font-weight;
    }

    .month {
        color: $calendar-secondary-color;
        background-color: $calendar-main-color;
        padding: $calendar-month-padding;
        font-size: $calendar-month-font-size;
        font-weight: $calendar-month-font-weight;
    }
}
</style>