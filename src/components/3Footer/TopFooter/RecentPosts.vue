<script>

export default {
    props: ['imgPath', 'content', 'date'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="recent-post d-flex">
        <div class="custom-col-left">
            <div class="pic-container">
                <img :src="imgPath" alt="Post Thumbnail">
            </div>
        </div>
        <div class="custom-col-right d-flex flex-column">
            <div><a href="#">{{ content }}</a></div>
            <span>{{ date }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.recent-post {
    margin-bottom: 22px;
    width: 310px;

    .custom-col-left {
        .pic-container {
            width: 70px;
            border-radius: 50%;
            overflow: hidden;
        }
    }

    .custom-col-right {
        margin-left: 15px;

        div {
            margin-top: -2px;
            letter-spacing: -0.2px;
            font-size: 13px;
            line-height: 19px;
            color: $top-footer-secondary-text-color;
        }

        span {
            color: $top-footer-main-text-color;
            font-size: 12px;
            margin-top: 8px;
            letter-spacing: -0.2px;
        }
    }
}
</style>