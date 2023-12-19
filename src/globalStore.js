import { reactive } from 'vue'

export const globalStore = reactive({
    logo: {
        path: '/img/logo-default-slim.png',
        alt: 'Porto Logo'
    },
    greyLogo: {
        path: '/img/logo-footer.png',
        alt: 'Porto Logo'
    }
});

