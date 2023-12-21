<script>
export default {
    props: ['authorImgPath', 'authorName', 'authorDescription'],
}
</script>

<template>
    <div class="wrapper d-flex">
        <div class="pic-container">
            <a href="#">
                <img :src="authorImgPath" :alt="authorName"></a>
        </div>
        <div class="content">
            <h5><a href="#">{{ authorName }}</a></h5>
            <div class="author-description">
                {{ authorDescription }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.wrapper {
    gap: $ma-author-photo-margin;

    .pic-container {
        width: $ma-author-photo-width;
        height: $ma-author-photo-height;
        flex-shrink: 0;

        img {
            height: 100%;
            object-fit: cover;

        }
    }

    h5 {
        padding-top: $ma-title-padding-top;
        font-size: $ma-title-font-size;
        font-weight: $ma-title-font-weight;
        color: $ma-title-font-color;

    }

    .author-description {
        padding-top: $ma-author-description-padding-top;
        font-size: $ma-author-description-font-size;
        color: $ma-author-description-font-color;
        letter-spacing: $ma-author-description-letter-spacing;
        line-height: $ma-author-description-line-height;
    }
}
</style>
