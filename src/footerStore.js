import { reactive } from 'vue'

export const footerStore = reactive({
    lastBlogPost: {
        firstLine: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna semper scelerisque.',
        restOfThePost: 'Praesent venenatis turpis vitae purus semper eget sagittis velit venenatis ptent taciti sociosqu ad litora...'
    }
});

