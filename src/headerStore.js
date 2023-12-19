import { reactive } from 'vue'

export const headerStore = reactive({
    topLinks: [
        {
            title: 'Sign In'
        },
        {
            title: 'About Us'
        },
        {
            title: 'Contact Us'
        },
        {
            title: 'Buy Now'
        }],

    navLinks: [
        {
            title: 'Home'
        },
        {
            title: 'Elements'
        },
        {
            title: 'Features'
        },
        {
            title: 'Pages'
        },
        {
            title: 'Portfolio'
        },
        {
            title: 'Blog'
        },
        {
            title: 'Shop'
        },
    ],
});

