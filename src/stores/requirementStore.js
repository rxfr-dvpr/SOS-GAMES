import { defineStore } from 'pinia';

export const requirementStore = defineStore('Requirement Store', {
    state: () => ({
        subtitle: 'Can My Computer Run this game?',
        title: 'system requirements',
        requireInfo: [
            {
                name: 'os:',
                text: 'Windows 7 64-bit only (No OSX support at this time)'
            },
            {
                name: 'pROCESSOR:',
                text: 'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ'
            },
            {
                name: 'mEMORY:',
                text: '8 GB RAM'
            },
            {
                name: 'storage:',
                text: '8 GB available space'
            },
            {
                name: 'GRAPHICS:',
                text: 'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)'
            },
        ]
    })
})