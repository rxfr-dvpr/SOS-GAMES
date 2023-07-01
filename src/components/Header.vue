<template>

    <header class="header" id="header">
        <div class="container">
            <div class="row">
                <div class="header__content">
                    <h1 class="header__title">{{ store.title }}</h1>

                    <p class="header__text">{{ store.text }}</p>

                    <a href="https://store.steampowered.com/app/859170/Survival/" target="_blank" class="buy-btn yellow-btn">{{ store.btnText }}</a>

                    <a href="#about" class="story-btn">the story <span><i class="fal fa-caret-down"></i></span></a>
                </div>
            </div>
        </div>

        <img src="@/assets/images/header-bg.png" alt="" class="header-bg">
        <span class="bg-gradient"></span>
    </header>

</template>

<script>
import { headerStore } from '@/stores/headerStore.js';

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

    .header {
        width: 100%;
        position: relative;
        height: 100%;
        padding: 310px 0 65px;

        &-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            z-index: -1;
            object-position: center;
        }

        &__content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            z-index: 2;
        }

        &__title {
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        &__text {
            font-size: calc(18px + 6 * (100vw / 1920));
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 30px;
        }

        .bg-gradient {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: rgb(0,0,0);
            background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%);
            background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%);
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        }

        .buy-btn {
            margin-bottom: 360px;
            text-transform: capitalize;
        }

        .story-btn {
            background: transparent;
            font-size: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;

            span {
                font-size: 25px;
            }
        }
    }

    @media (min-width: 1920px) {
        .header {
            &__text {
                font-size: 24px;
            }
        }
    }

    @media (max-width: 992px) {
        .header {
            padding: 250px 0 55px;
            
            .buy-btn {
                margin-bottom: 170px;
            }

            &__text {
                font-size: calc(18px + (6 + 6 * 0.7) * ((100vw - 320px)/ 1920)) !important;
            }
        }
    }

</style>