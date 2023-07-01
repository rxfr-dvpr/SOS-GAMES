import { defineStore } from "pinia";

export const featuresStore = defineStore('Features Store', {
    state: () => ({
        title: 'features',
        subtitle: "what's so special?",
        list: [
            {
                name: 'SURVIVE AT ALL COSTS',
                text: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
            },
            {
                name: 'CREATE ALLIES AND ENEMIES',
                text: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
            },
            {
                name: 'IMPRESS THE AUDIENCE',
                text: 'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.'
            }
        ]
    })
})