<template>
  <section class="requirement__section" id="requirement">
    <div class="container">
        <div class="row">

            <p class="requirement__subtitle subtitle-size">{{ store.subtitle }}</p>
            <h2 class="requirement__title">{{ store.title }}</h2>

            <div class="require__content-grid">
                <div :class="`require__content content-${idx + 1}`" v-for="(content, idx) in store.requireInfo" :key="idx">
                    <p class="require__content-name">{{ content.name }}</p>
                    <p class="require__content-text">{{ content.text }}</p>
                </div>
            </div>
        </div>
    </div>

    <img src="@/assets/images/requirement-bg.png" alt="" class="requirement-bg">
    <span class="bg-dark"></span>
  </section>
</template>

<script>
import { requirementStore } from '@/stores/requirementStore';

export default {
    name: 'Requirement Section',
    data() {
        return {
            store: requirementStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.requirement__section {
    width: 100%;
    position: relative;
    padding: 145px 0 170px;

    .row {
        flex-direction: column;
    }

    .requirement-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -2;
    }

    .bg-dark {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(0,0,0);
        background: -moz-radial-gradient(circle, rgba(0,0,0,0) 26%, rgba(0,0,0,1) 80%);
        background: -webkit-radial-gradient(circle, rgba(0,0,0,0) 26%, rgba(0,0,0,1) 80%);
        background: radial-gradient(circle, rgba(0,0,0,0) 26%, rgba(0,0,0,1) 80%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        z-index: -1;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(0,0,0);
            background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 97%);
            background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 97%);
            background: linear-gradient(180deg, rgba(0,0,0,1) 3%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 97%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        }
    }

    .requirement {
        &__subtitle {
            text-transform: uppercase;
            text-align: center;
        }

        &__title {
            letter-spacing: 3px;
            font-weight: 500;
            text-transform: uppercase;
            text-align: center;
        }
    }

    .require__content-grid {
        max-width: 575px;
        width: 100%;
        margin-top: 130px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        border: solid 1px #979797;

        .require__content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 6px;
            padding: 15px 20px;

            &-name {
                font-size: calc(18px + 6 * (100vw / 1920));
                color: var(--main-yellow);
            }

            &-text {
                font-size: calc(14px + 4 * (100vw / 1920));
                font-family: var(--text-font);
            }
        }

        .content-1 { grid-area: 1 / 1 / 3 / 3; }
        .content-2 { grid-area: 1 / 3 / 3 / 5; }
        .content-3 { grid-area: 3 / 1 / 5 / 3; }
        .content-4 { grid-area: 3 / 3 / 5 / 5; }
        .content-5 { grid-area: 5 / 1 / 7 / 5; }

        .content-1,
        .content-3 {
            border-right: solid 1px #979797;
            border-bottom: solid 1px #979797;
        }

        .content-2,
        .content-4 {
            border-right: solid 1px #979797;
            border-bottom: solid 1px #979797;
        }
    }
}

@media (min-width: 1980px) {
    .require__content {
        &-name {
            font-size: 24px !important;
        }

        &-text {
            font-size: 18px !important;
        }
    }
}

@media (max-width: 992px) {

    .requirement__section {
        padding: 100px 0 140px;

        .require__content-grid {
            margin-top: 100px !important;

            .require__content {
                &-name {
                    font-size: calc(18px + (6 + 6 * 0.7) * ((100vw - 320px)/ 1920));
                }

                &-text {
                    font-size: calc(14px + (4 + 4 * 0.7) * ((100vw - 320px)/ 1920));
                }
            }
        }
    }

}

@media (max-width: 768px) {

    .requirement__section {
        padding: 70px 0 100px;

        .require__content-grid {
            margin-top: 70px !important;

            .require__content {
                padding: 10px 15px !important;
            }
        }
    }

}

</style>