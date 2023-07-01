<template>
  <footer class="footer">
    <div class="container">
        <div class="row">

            <div class="footer__top">
                <a href="#header" class="footer-logo">
                    <img src="@/assets/images/footer-logo.png" alt="" class="footer-logo-img">
                </a>

                <ul class="footer__list">
                    <li class="footer__list-item" v-for="(link, idx) in navStore.links" :key="idx">
                        <a :href="link.url" class="footer__list-link" >
                            {{ link.name }}
                        </a>
                    </li>
                </ul>

                <div class="footer__weblinks">
                    <a :href="item.url" target="_blank" class="footer__weblinks-item" v-for="(item, idd) in store.webLinks" :key="idd" v-html="item.icon"></a>
                </div>
            </div>

            <span class="footer-line"></span>

            <div class="footer__bottom">
                <p class="copyright__txt">{{ `© ${ new Date().getFullYear()} ${store.copyTxt}` }}</p>
                <p class="policy__txt">{{ store.policyTxt }}</p>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from '@/stores/footerStore.js'
import { navStore } from '@/stores/navStore.js';
export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore(),
            navStore: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 20px 0 45px;

    .row {
        flex-direction: column;
        row-gap: 30px;
    }

    &__top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;

        .footer-logo {
            max-width: 80px;
            width: 100%;

            &-img {
                width: 100%;
            }
        }

        .footer__list {
            max-width: max-content;
            width: 100%;
            display: flex;
            column-gap: 25px;
            row-gap: 10px;
            align-items: center;
            flex-wrap: wrap;

            &-link {
                font-family: var(--text-font);
                text-transform: uppercase;
                font-size: 14px;
                letter-spacing: 1.2px;
                transition: .3s;
                font-weight: 500;

                &:hover {
                    color: var(--main-yellow);
                }
            }
        }

        .footer__weblinks {
            max-width: max-content;
            width: 100%;
            display: flex;
            column-gap: 25px;
            align-items: center;
            
            &-item {
                font-size: 17px;
                transition: .3s;
            }
        }
    }

    &-line {
        width: 100%;
        height: 1px;
        border-radius: 10px;
        background: var(--main-white);
        opacity: .4;
    }

    &__bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;

        .copyright__txt {
            font-size: 14px;
            font-family: var(--text-font);
            opacity: .5;
            user-select: none;
        }

        .policy__txt {
            font-size: 14px;
            font-family: var(--text-font);
            opacity: .5;
            user-select: none;
        }
    }
}

@media (max-width: 870px) {
    .footer__top {
        flex-direction: column;

        .footer__list {
            justify-content: center;
        }
    }

    .footer__bottom {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .footer-logo {
        max-width: 60px !important;
    }
}

</style>