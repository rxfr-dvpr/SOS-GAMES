import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'main',
                url: '#header'
            },
            {
                name: 'about',
                url: '#about'
            },
            {
                name: 'game features',
                url: '#features'
            },
            {
                name: 'system requirements',
                url: '#requirement'
            },
            {
                name: 'quotes',
                url: '#quotes'
            },
        ],
        platformList: [
            {
                icon: '<i class="fab fa-xbox"></i>',
                url: 'https://www.xbox.com/'
            },
            {
                icon: '<i class="fab fa-steam"></i>',
                url: 'https://store.steampowered.com/'
            }
        ]
    })
})