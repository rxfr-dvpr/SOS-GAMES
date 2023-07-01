import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        webLinks: [
            {
                url: 'https://www.facebook.com/',
                icon: '<i class="fab fa-facebook-f"></i>'
            },
            {
                url: 'https://twitter.com/',
                icon: '<i class="fab fa-twitter"></i>'
            },
            {
                url: 'https://www.youtube.com/',
                icon: '<i class="fab fa-youtube"></i>'
            },
            {
                url: 'https://www.twitch.tv/',
                icon: '<i class="fab fa-twitch"></i>'
            },
        ],
        copyTxt: 'Sos Games, Inc. All Rights Reserved',
        policyTxt: 'Privacy Policy | Terms of Services | Code of Conduct'
    })
})