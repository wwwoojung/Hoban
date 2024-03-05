const SECTION = document.querySelectorAll('.section');

const Fullpage = new fullpage('#content', {
    anchors: ['01', '02', '03', '04', '05'],
    scrollOverflow: false, // line-height : 1 에서 스크롤 생기는 거 없애줘...
    // css3: false,
    paddingTop: '101px',
    afterLoad: function (o, d, dr) {
        SECTION.forEach(it => it.classList.remove('on'))
        SECTION[d.index].classList.add('on');
    }
});

const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    slideActiveClass: 'on',
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
        crossFade: true
    },

    on: {
        init: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
        slideChangeTransitionEnd: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.add('on');
        },
        slideChangeTransitionStart: function () {
            document.querySelector('.mainVisual .b_inner .num').classList.remove('on');
        },
    }
});

const MAIN_CONTENT_SLIDE = new Swiper('.main_content_slide', {
    loop: true,
    slideActiveClass: 'on',
    slidesPerView: 4,
    spaceBetween: 30,
});

const MAIN_CONTENT_SLIDE_BUTTON = document.querySelectorAll('.main_content_slide button');


MAIN_CONTENT_SLIDE_BUTTON[0].addEventListener('click', () => {
    MAIN_CONTENT_SLIDE.slidePrev();
});
MAIN_CONTENT_SLIDE_BUTTON[1].addEventListener('click', () => {
    MAIN_CONTENT_SLIDE.slideNext();
});
