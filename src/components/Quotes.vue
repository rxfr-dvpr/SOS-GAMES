<template>
  <section class="quotes__section" id="quotes">
    <div class="container">
        <div class="row">

            <div class="quotes__content">
                <p class="quotes__content-subtitle subtitle-size">{{ store.content.subtitle }}</p>
                <h2 class="quotes__content-title">{{ store.content.title }}</h2>
                <p class="quotes__content-text">{{ store.content.text }}</p>

                <router-link to="/" class="read-link yellow-btn">read more testimonials</router-link>
            </div>

            <div class="comment__list">
                <div :class="`comment__list-item comment-${idx + 1}`" v-for="(comment, idx) in store.comments" :key="idx">
                    <div class="comment-info">
                        <img :src="avatars[idx]" alt="" class="comment-avatar" onerror="this.onerror=null; this.src='https://t4.ftcdn.net/jpg/04/00/24/31/240_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg'">

                        <p class="comment-name">
                            {{ comment.name }} 
                            <span class="comment-job">{{ comment.job }}</span>
                        </p>

                        <span class="comment-icon"><i class="fab fa-twitter"></i></span>
                    </div>

                    <p class="comment-text">{{ comment.text }}</p>
                    <p class="comment-date">{{ comment.date }}</p>
                </div>
            </div>

        </div>
    </div>

    <img src="@/assets/images/quotes-bg.png" alt="" class="quotes-bg">
    <span class="quotes-bg-gradient"></span>
  </section>
</template>

<script>
import ava1 from '@/assets/images/comments/ava-1.png'
import ava2 from '@/assets/images/comments/ava-2.png'
import ava3 from '@/assets/images/comments/ava-3.png'
import { quotesStore } from '@/stores/quotesStore.js'

export default {
    name: "Quotes Section",
    data() {
        return {
            store: quotesStore(),
            avatars: [ava1, ava2, ava3]
        }
    }
}

</script>

<style lang="scss" scoped>

.quotes__section {
    width: 100%;
    position: relative;
    padding: 150px 0;

    .row {
        justify-content: space-between;
        align-items: center;
        row-gap: 40px;
    }

    .quotes-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -2;
    }

    .quotes-bg-gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgb(0,0,0);
        background: -moz-linear-gradient(180deg, rgba(0,0,0,0.7987570028011204) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7399334733893557) 100%);
        background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.7987570028011204) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7399334733893557) 100%);
        background: linear-gradient(180deg, rgba(0,0,0,0.7987570028011204) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7399334733893557) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    }

    .quotes__content {
        max-width: 435px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &-subtitle {
            text-transform: uppercase;
        }

        &-title {
            font-weight: 500;
        }

        &-text {
            font-size: calc(14px + 4 * (100vw / 1920));
            font-family: var(--text-font);
            margin: 40px 0;
        }

        .read-link {
            text-transform: capitalize;
        }
    }

    .comment__list {
        max-width: 560px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;

        &-item {
            max-width: 450px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.08);
            padding: 12px 20px 20px 15px;

            .comment-info {
                width: 100%;
                display: flex;
                gap: 15px;
                align-items: center;

                .comment-avatar {
                    max-width: 60px;
                    width: 100%;
                    min-width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: center;
                }

                .comment-name {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    color: var(--main-yellow);
                    font-size: calc(21px + 3 * (100vw / 1920));

                    .comment-job {
                        font-size: calc(14px + 4 * (100vw / 1920));
                        color: var(--main-gray);
                        font-weight: 500;
                    }
                }

                .comment-icon {
                    margin-left: auto;
                    color: var(--main-gray);
                    opacity: .5;
                }
            }

            .comment-text {
                font-size: calc(14px + 3 * (100vw / 1920));
                font-family: var(--text-font);
            }

            .comment-date {
                color: var(--main-gray);
                font-family: var(--text-font);
                font-size: calc(12px + 2 * (100vw / 1920));
            }

            &.comment-1,
            &.comment-3 {
                margin-left: auto;
            }
        }
    }
}

@media (min-width: 1920px) {
    .quotes__content {
        &-text {
            font-size: 18px !important;
        }
    }

    .comment-name {
        font-size: 24px !important;

        .comment-job {
            font-size: 18px !important;
        }
    }

    .comment-text {
        font-size: 17px !important;
    }

    .comment-date {
        font-size: 14px !important;
    }
}

@media (max-width: 1035px) {
    .quotes__section {
        .row {
            flex-direction: column;
            justify-content: flex-start !important;
        }
    }
}

@media (max-width: 992px) {
    .quotes__section {
        padding: 100px 0;

        .quotes__content {
            &-text {
                font-size: calc(14px + (4 + 4 * 0.7) * ((100vw - 320px)/ 1920));
            }
        }

        .comment-avatar {
            max-width: 50px !important;
            min-width: 50px !important;
            height: 50px !important;
        }

        .comment-name {
            font-size: calc(21px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920));
            .comment-job {
                font-size: calc(14px + (4 + 4 * 0.7) * ((100vw - 320px)/ 1920));
            }
        }

        .comment-text {
            font-size: calc(14px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920));
        }

        .comment-date {
            font-size: calc(12px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (max-width: 600px) {
    .quotes__section {
        padding: 60px 0;
    }
}

</style>