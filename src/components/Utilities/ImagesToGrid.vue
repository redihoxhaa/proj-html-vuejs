<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
            validator: (value) => {
                return value.length === 6; // Verifica che l'array abbia 6 elementi
            }
        }
    }
};
</script>

<template>
    <div class="image-collage">
        <div v-for="(image, index) in images" :key="index" class="image-wrapper">
            <img :src="image" class="image" alt="Image" />
        </div>
    </div>
</template>

<style lagn="scss" scoped>
.image-collage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.image-wrapper {
    position: relative;
    padding-bottom: 100%;
    /* Quadrato, regola l'altezza in base alla larghezza */
    overflow: hidden;
}

.image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>