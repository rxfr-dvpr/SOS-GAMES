<template>
  <nav :class="`nav ${scrolled ? 'blured' : ''} ${navOpened ? 'opened' : ''}`">
    <div class="container">
        <div class="row">

            <a href="#header" class="nav-logo">
                <img src="@/assets/images/logo.png" alt="" class="logo-img">
            </a>

            <div :class="`nav__collapse`" @click.self="navOpened = false">
                <ul class="nav__list">
                    <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                        <a :href="link.url" class="nav__list-link">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div>
            
            <div class="nav__platform-list">
                <a :href="item.url" class="nav__platform-list-item" target="_blank" v-for="(item, idd) in store.platformList" :key="idd" v-html="item.icon"></a>
            </div>

            <button class="nav-btn" @click="navOpened = !navOpened" v-if="windowSize < 768">
                <span class="nav-btn-line top"></span>
                <span class="nav-btn-line middle"></span>
                <span class="nav-btn-line bottom"></span>
            </button>
        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from '@/stores/navStore.js';

export default {
    name: 'Nav',
    data() {
        return {
            store: navStore(),
            scrolled: false,
            navOpened: false,
            windowSize: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.scrolled = true
            window.scrollY == 0 ? this.scrolled = false : ''  
        })

        window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
        })
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2023;
    transition: .2s;

    &.blured {
        backdrop-filter: blur(6px);   
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo {
        display: block;

        .logo-img {
            width: 55px;
            height: 55px;
        }
    }

    .nav__collapse {
        max-width: max-content;
        width: 100%;

        .nav__list {
            width: 100%;
            display: flex;
            column-gap: 35px;
            align-items: center;
            font-size: 20px;

            &-link {
                text-transform: uppercase;
                font-size: 20px;
                transition: .4s;

                &:hover {
                    color: var(--main-yellow);
                }
            }
        }
    }
    
    .nav__platform-list {
        max-width: max-content;
        width: 100%;
        display: flex;
        column-gap: 17px;
        align-items: center;
    }

    .nav-btn {
        width: 25px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        row-gap: 5px;
        background: transparent;
        border: 0;
        z-index: 3022;

        .nav-btn-line {
            width: 100%;
            height: 2px;
            background: var(--main-yellow);
            border-radius: 10px;
            transition: .4s;

            &.middle {
                width: 85%;
            }

            &.bottom {
                width: 65%;
            }
        }
    }
}

@media (max-width: 768px) {

    .nav__collapse {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: rgba($color: #000000, $alpha: .7);
        display: flex;
        align-items: center;
        padding: 15px;
        transition: .7s;
        opacity: 0;
        transform: translateX(120%);
        overflow-y: auto;
        box-shadow: -15px 0 35px rgba($color: #000000, $alpha: .85);

        .nav__list {
            flex-direction: column;
            align-items: flex-end !important;
            row-gap: 25px;

            &-link {
                color: var(--main-yellow);
            }
        }
    }

    .nav.opened {
        .nav__collapse {
            transform: translateX(0);
            opacity: 1;
        }

        .nav-btn {
            &-line {
                &.top {
                    transform: rotate(-45deg) translateX(-10px);
                }

                &.middle {
                    opacity: 0;
                    visibility: hidden;
                }

                &.bottom {
                    width: 100%;
                    transform: rotate(45deg) translateX(-10px);
                }

            }
        }
    }
}

</style>