import { defineStore } from 'pinia';

export const quotesStore = defineStore('Quotes Store', {
    state: () => ({
        content: {
            subtitle: 'What people think?',
            title: 'Press quotes',
            text: 'Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.'
        },
        comments: [
           {
                name: 'Evan Lahti',
                job: 'PC Gamer',
                text: '“One of my gaming highlights of the year.”',
                date: 'October 18, 2022',
           },
           {
                name: 'Jada Griffin',
                job: 'Nerdreactor',
                text: '“The next big thing in the world of streaming and survival games.”',
                date: 'December 21, 2022',
           },
           {
                name: 'Aaron Williams ',
                job: 'Uproxx',
                text: '“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”',
                date: 'December 24, 2022',
           }
        ]
    })
})