import { defineStore } from 'pinia'

export const aboutStore = defineStore('About Store', {
    state: () => ({
        subtitle: 'What is SOS?',
        title: 'social battle royale game',
        text: 'Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape? Making the right decisions could be the difference between life and death.'
    })
})