<template>

  <section class="about__section" id="about">
    <div class="container">
        <div class="row">

            <div class="about__content">
                <p class="about__content-subtitle subtitle-size">{{ store.subtitle }}</p>
                <h2 class="about__content-title">{{ store.title }}</h2>

                <span class="about__content-line"></span>

                <p class="about__content-text">{{ store.text }}</p>
            </div>

            <div class="about__gallery">
                <AboutCards/>
            </div>

        </div>
    </div>

    <img src="@/assets/images/about-bg.png" alt="" class="about-bg">
    <span class="about-bg-gradient"></span>
  </section>

</template>

<script>
import { aboutStore } from '@/stores/aboutStore.js'
import AboutCards from './AboutCards.vue'

export default {
    name: 'About Section',
    data() {
        return {
            store: aboutStore()
        }
    },
    components: {
        AboutCards
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    height: 100%;
    padding: 185px 0 145px;
    position: relative;
    overflow: hidden;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 45px;
    }

    .about__content {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 5px;
        z-index: 5;

        &-subtitle {
            font-weight: 300;
        }

        &-title {
            max-width: 410px;
            width: 100%;
            font-weight: 400;
            line-height: 100%;
        }

        &-line {
            width: 100%;
            height: 4px;
            background: var(--main-white);
            border-radius: 5px;
        }

        &-text {
            margin-top: 60px;
            max-width: 365px;
            width: 100%;
            font-size: calc(14px + 6 * (100vw / 1920));
            margin-left: auto;
        }
    }

    .about-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -2;
    }

    .about-bg-gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5858718487394958) 50%, rgba(0,0,0,1) 95%);
        background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5858718487394958) 50%, rgba(0,0,0,1) 95%);
        background: linear-gradient(180deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5858718487394958) 50%, rgba(0,0,0,1) 95%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    }
}

@media (min-width: 1920px) {
    .about__content {
        &-text {
            font-size: 20px !important;
        }
    }
}

@media (max-width: 1120px) {
    .row {
        flex-direction: column;
        justify-content: flex-start !important;
    }
}

@media (max-width: 992px) {
    .about__section {
        padding: 145px 0 105px;
    }

    .about__content {
        &-text {
            font-size: calc(14px + (6 + 6 * 0.7) * ((100vw - 320px)/ 1920)) !important;
        }
    }
}

@media (max-width: 768px) {
    .about__section {
        padding: 105px 0 65px;
    }
}

@media (max-width: 460px) {
    .about__section {
        padding: 65px 0 35px;
    }
}

</style>