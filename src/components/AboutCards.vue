<template>
    <swiper class="mySwiper"
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :pagination="{clickable: true}"
        :navigation="true"
    >
        <swiper-slide>
            <img src="@/assets/images/about-cards/card-1.png" alt="" class="swiper-img">
        </swiper-slide>    
        <swiper-slide>
            <img src="@/assets/images/about-cards/card-2.png" alt="" class="swiper-img">
        </swiper-slide>    
        <swiper-slide>
            <img src="@/assets/images/about-cards/card-3.png" alt="" class="swiper-img">
        </swiper-slide>    
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/scss';
import 'swiper/scss/effect-cards';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { EffectCards, Pagination, Navigation } from 'swiper';

export default {
    name: 'About Cards',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [EffectCards, Pagination, Navigation]
        }
    }
}

</script>

<style lang="scss" scoped>

.swiper {
    width: 400px;
    height: 550px;
}

.swiper-slide {
    width: 100%;
    height: 100%;
    border-radius: 6px;

    .swiper-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
    }
}

@media (max-width: 668px) {
    .swiper {
        width: 300px;
        height: 450px;
    }
}

@media (max-width: 500px) {
    .swiper {
        width: 250px;
        height: 350px;
    }
}

@media (max-width: 400px) {
    .swiper {
        width: 200px;
        height: 300px;
    }
}

</style>