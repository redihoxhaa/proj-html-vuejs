<script>

export default {
    props: ['user', 'post', 'date'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="recent-comment d-flex flex-column">
        <div class="activity d-flex">

            <div>
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
                <a href="#" class="user">
                    {{ user }}</a>
                commented on
                <a href="#" class="post">{{ post }}</a>
            </div>
        </div>
        <span class="date">{{ date }}</span>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../../assets/scss/partials/variables' as *;
// /USES

.recent-comment {
    margin-bottom: 22px;
    width: 320px;

    .activity {
        color: #B7B7B7;
        font-size: 13px;
        line-height: 25px;
        letter-spacing: -0.2px;

        .fa-chevron-right {
            color: #0088CC;
            font-size: 8px;
            margin-right: 10px;
            padding-bottom: 3px;
        }

        .user {
            font-weight: 700;
            letter-spacing: -0.2px;
            font-size: 13px;
            line-height: 19px;
            color: $top-footer-secondary-text-color;
        }

        .post {
            color: $top-footer-link-color !important;
            font-size: 13px;
            font-weight: 500;
            margin-top: 8px;
            letter-spacing: -0.2px;

        }
    }

    .date {
        padding-top: 13px;
        font-size: 11px;
        color: $top-footer-main-text-color;
    }
}
</style>