import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        subtitle: 'Want to stay in touch?',
        title: 'newsletter SUBSCRIBE',
        text: 'In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.',
        placeholder: 'Your email address',
        btnText: 'Subscribe now'
    })
})