<script>
export default {
    props: ['badgeText'],
}
</script>

<template>
    <div class="custom-badge text-uppercase">
        {{ badgeText }}
    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../../assets/scss/partials/variables' as *;
// /USES

.custom-badge {
    width: fit-content;
    padding: $badge-padding;
    border-radius: $badge-border-radius;
    background-color: $badge-bg-color;
    color: $badge-text-color;
    font-weight: $badge-font-weight;
    font-size: $badge-font-size;
    margin-bottom: $badge-margin-bottom;
}
</style>