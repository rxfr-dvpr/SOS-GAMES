<template>

  <section class="contact__section">
    <div class="container">
        <div class="row">

            <div class="contact__info">
                <p class="contact__info-subtitle subtitle-size">{{ store.subtitle }}</p>
                <h2 class="contact__info-title">{{ store.title }}</h2>
                <p class="contact__info-text">{{ store.text }}</p>
            </div>

            <form action="" class="contact__form">
                <input type="email" class="email-inp" :placeholder="store.placeholder" required>
                <button type="submit" class="email-btn yellow-btn">{{ store.btnText }}</button>
            </form>
        </div>
    </div>
    
    <div class="contact__img-box">
        <img src="@/assets/images/contact-bg.png" alt="" class="contact-bg">
    </div>

  </section>

</template>

<script>
import { contactStore } from '@/stores/contactStore.js'
export default {
    name: 'Contact Section',
    data() {
        return {
            store: contactStore()
        }
    }
}

</script>

<style lang="scss" scoped>

$contentWidth: 670px;

.contact__section {
    width: 100%;
    padding: 180px 0 120px;
    background: #000;
    position: relative;
    overflow: hidden;

    .contact__img-box {
        max-width: 400px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 15%;

        .contact-bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(0,0,0);
            background: -moz-radial-gradient(circle, rgba(0,0,0,0) 23%, rgba(0,0,0,1) 78%);
            background: -webkit-radial-gradient(circle, rgba(0,0,0,0) 23%, rgba(0,0,0,1) 78%);
            background: radial-gradient(circle, rgba(0,0,0,0) 23%, rgba(0,0,0,1) 78%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        }
    }

    
    .row {
        flex-direction: column;
        align-items: flex-end;
        row-gap: 55px;
    }

    .contact__info {
        max-width: $contentWidth;
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 3;

        &-subtitle {
            text-transform: uppercase;
        }

        &-title {
            font-weight: 500;
        }

        &-text {
            font-size: calc(14px + 3 * (100vw / 1920));
            font-family: var(--text-font);
            margin-top: 35px;
        }
    }

    .contact__form {
        max-width: $contentWidth;
        width: 100%;
        display: flex;
        gap: 18px;
        align-items: center;
        z-index: 3;


        .email-inp {
            max-width: 360px;
            width: 100%;
            padding: 15px 20px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.08);
            outline: none;
            border: 0;
            color: var(--main-yellow);
            font-size: 15px;
            font-family: var(--text-font);

            &::placeholder {
                font-family: var(--main-font);
                font-size: 18px;
            }
        }

        .email-btn {
            text-transform: capitalize;
        }
    }
}

@media (min-width: 1920px) {
    .contact__info {
        &-text {
            font-size: 17px !important;
        }
    }
}

@media (max-width: 992px) {
    .contact__info {
        &-text {
            font-size: calc(14px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (max-width: 600px) {

    .contact__img-box {
        left: 5% !important;
    }

    .contact__form {
        flex-direction: column;
    }
}

</style>