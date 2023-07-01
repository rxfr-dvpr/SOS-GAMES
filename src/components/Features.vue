<template>
  <section class="features__section" id="features">
    <div class="container">
        <div class="row">

            <div class="features__content">
                <p class="features__subtitle subtitle-size">{{ store.subtitle }}</p>
                <h2 class="features__title">{{ store.title }}</h2>

                <ul class="features__list">
                    <li class="features__list-item" v-for="(list, idx) in store.list" :key="idx">
                        <p class="item-title">{{ list.name }}</p>
                        <span class="item-text">{{ list.text }}</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <img src="@/assets/images/features-bg.png" alt="" class="features__bg">
    <span class="bg-gradient"></span>
  </section>
</template>

<script>
import { featuresStore } from '@/stores/featuresStore';
export default {
    name: 'Features Section',
    data() {
        return {
            store: featuresStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.features__section {
    width: 100%;
    padding: 180px 0;
    position: relative;

    .row {
        flex-direction: column;
        align-items: flex-end;
    }

    .features__content {
        max-width: 420px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 3;

        .features {
            &__subtitle {
                letter-spacing: 2px;
            }
    
            &__title {
                letter-spacing: 5px;
                margin-bottom: 70px;
            }

            &__list {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 30px;

                &-item {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    column-gap: 10px;
                    row-gap: 2px;

                    .item-title {
                        font-size: calc(21px + 15 * (100vw / 1920));
                        color: var(--main-yellow);
                        display: flex;
                        align-items: center;
                        column-gap: 5px;
                        position: relative;

                        &::before {
                            content: '';
                            width: 15px;
                            height: 15px;
                            min-width: 15px;
                            border-radius: 50%;
                            position: absolute;
                            top: 25%;
                            left: -9%;
                            border: 2px solid var(--main-white);
                        }
                    } 

                    .item-text {
                        font-size: calc(14px + 3 * (100vw / 1920));
                        font-family: var(--text-font);
                    }
                }
            }
        }
    }

    .features__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        z-index: -1;
    }

    .bg-gradient {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(0,0,0);
        background: -moz-linear-gradient(180deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9864320728291317) 100%);
        background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9864320728291317) 100%);
        background: linear-gradient(180deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9864320728291317) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    }
}

@media (min-width: 1980px) {
    .features__section {
        .item-title {
            font-size: 36px !important;
        }

        .item-text {
            font-size: 17px !important;
        }
    }
}

@media (max-width: 992px) {
    .features__section {
        padding: 150px 0;
        .item-title {
            font-size: calc(21px + (15 + 15 * 0.7) * ((100vw - 320px)/ 1920));
        }

        .item-text {
            font-size: calc(14px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (max-width: 600px) {
    .features__section {
        padding: 100px 0;
        .item-title {
            &::before {
                display: none;
            }
        }
    }
}

@media (max-width: 768px) {
    .bg-gradient {
        background: rgb(0,0,0);
        background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6895133053221288) 50%, rgba(0,0,0,1) 100%) !important;
        background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6895133053221288) 50%, rgba(0,0,0,1) 100%) !important;
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6895133053221288) 50%, rgba(0,0,0,1) 100%) !important;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1) !important;
    }
}

</style>