import { defineStore } from 'pinia'

export const headerStore = defineStore('Header Store', {
  state: () => ({
    title: 'SURVIVE AT ALL COSTS',
    text: 'Experience new social battle royale game',
    btnText: 'Buy Now on Steam | $8.49'
  })
})
