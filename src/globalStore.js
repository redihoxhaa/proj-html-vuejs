import { reactive } from 'vue'

export const globalStore = reactive({
    logo: {
        path: '/img/logo-default-slim.png',
        altContent: 'Porto Logo'
    },
    greyLogo: {
        path: '/img/logo-footer.png',
        altContent: 'Porto Logo'
    },
    categories: ['Gadgets', 'Photography', 'Lifestyle', 'Fashion', 'Recipes', 'Travel', 'Business', 'Architecture', 'Reviews', 'Sports', 'Videos', 'Technology', 'Design'],
    pageNumbers: ['1', '2', '3', '4'],
    tags: ['Design', 'Brands', 'Video', 'Business', 'Travel']
});

