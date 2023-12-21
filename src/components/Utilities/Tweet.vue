<script>
export default {
    props: ['content', 'date'],
}
</script>

<template>
    <div class="tweet d-flex">
        <div class="custom-col-left">
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </div>
        <div class="custom-col-right d-flex flex-column">
            <div>{{ content }}</div>
            <span>{{ date }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.tweet {
    margin-bottom: 26px;

    .fa-twitter {
        font-size: 20px;
    }

    .custom-col-right {
        margin-left: 10px;

        div {
            margin-top: -2px;
            text-indent: 2px;
            font-size: 14px;
            line-height: 24px;
            color: #888888;
        }

        span {
            color: #0088CC;
            font-size: 13px;
            margin-top: 5px;
            letter-spacing: -0.2px;
        }
    }
}
</style>