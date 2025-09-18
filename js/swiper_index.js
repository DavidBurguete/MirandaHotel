window.addEventListener("load", () => {
    const swiper = new Swiper('.swiper_complete', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.custom-button-next--only_navigation',
            prevEl: '.custom-button-prev--only_navigation',
        },

        autoplay: {
            delay: 5000
        },

        slidesPerView: 2,

        centeredSlides: true
    });
});