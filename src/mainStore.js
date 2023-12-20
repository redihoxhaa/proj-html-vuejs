import { reactive } from 'vue'

export const mainStore = reactive({
    articles: [
        {
            id: 0,
            titleText: 'How To Take Better Concert Pictures in 30 Seconds',
            imgPath: '/img/blog-46.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Photography'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 1,
            titleText: 'Gadgets That Make Your Smartphone Even Smarter',
            imgPath: '/img/blog-47.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Gadgets'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 2,
            titleText: '20 Top-Rated Tourist Attractions in Manhattan',
            imgPath: '/img/blog-48.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 3,
            titleText: 'The Best Way to Ride a Motorcycle',
            imgPath: '/img/blog-49.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 4,
            titleText: '5 Fun Things to Do at the Beach',
            imgPath: '/img/blog-50.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 5,
            titleText: 'Amazingly Fresh Fruit And Herb Drinks For Summer',
            imgPath: '/img/blog-51.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Recipes'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 6,
            titleText: 'How to Make Friends as a Grown-Up',
            imgPath: '/img/blog-54.jpg',
            littleImgPath: '',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Photography', 'Travel'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 7,
            titleText: 'Simple Ways to Have a Pretty Face',
            imgPath: '/img/blog-55(1).jpg',
            littleImgPath: '/img/blog-55.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Photography', 'Travel'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 8,
            titleText: 'Ranking the greatest players in basketball',
            imgPath: '/img/blog-56(1).jpg',
            littleImgPath: '/img/blog-56.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Sport', 'Business'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 9,
            titleText: 'Top Camper Trailer Towing Tips',
            imgPath: '/img/blog-58(1).jpg',
            littleImgPath: '/img/blog-58.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 10,
            titleText: '10 Best Travel Tips After 5 Years Traveling The World',
            imgPath: '',
            littleImgPath: '',
            imgCollagePaths: ['/img/blog-13.jpg', '/img/blog-16.jpg', '/img/blog-20.jpg', '/img/blog-23.jpg', '/img/blog-29.jpg', '/img/blog-40.jpg'],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 11,
            titleText: '4 Ways to Look Cool in Glasses',
            imgPath: '',
            littleImgPath: '/img/blog-57.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 12,
            titleText: '5 Lovely Walks in New York',
            imgPath: '',
            littleImgPath: '/img/blog-59.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 13,
            titleText: 'Main Reasons To Stop Texting And Driving',
            imgPath: '/img/blog-65(1).jpg',
            littleImgPath: '/img/blog-65.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 14,
            titleText: 'Tips to Help You Quickly Prepare your Lunch',
            imgPath: '/img/blog-66.jpg',
            littleImgPath: '/img/blog-66.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Recipes', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 15,
            titleText: 'Why should I buy a smartwatch?',
            imgPath: '/img/blog-67(1).jpg',
            littleImgPath: '/img/blog-67.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 16,
            titleText: 'The best augmented reality smartglasses',
            imgPath: '',
            littleImgPath: '/img/blog-68.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },
        {
            id: 17,
            titleText: '12 Healthiest Foods to Eat for Breakfast',
            imgPath: '',
            littleImgPath: '/img/blog-69.jpg',
            imgCollagePaths: [],
            pubYear: '2019',
            pubMonth: 'January',
            pubDay: '12',
            categories: ['Travel', 'Lifestyle'],
            paragraphText: 'Euismod atras vulputate iltricies etri elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris tincidunt vitae. [...]',
            authorName: 'John Doe',
            authorImgPath: '/img/avatar.jpg',
            authorDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eulsmod odio, gravida pelle, consectetur adipiscing elit.',
            comments: 12,
        },

    ]

});

