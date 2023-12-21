import { reactive } from 'vue'

export const footerStore = reactive({
    lastBlogPost: {
        firstLine: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.',
        restOfThePost: 'Praesent venenatis turpis vitae purus semper, eget sagittis velit venenatis ptent taciti sociosqu ad litora...'
    },
    recentPosts: [
        {
            imgPath: '/img/our-office-4-square.jpg',
            content: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
            date: '12:53 AM Dec 19th'
        },
        {
            imgPath: '/img/our-office-5-square.jpg',
            content: 'Lorem ipsum dolor sit, consectetur adipiscing elit.',
            date: '12:53 AM Dec 19th'
        }
    ],
    recentComments: [
        {
            user: 'John Doe',
            post: 'lorem ipsum dolor sit amet.',
            date: '12:55 AM Dec 19th'
        },
        {
            user: 'John Doe',
            post: 'lorem ipsum dolor sit amet.',
            date: '12:55 AM Dec 19th'
        }
    ]
});

