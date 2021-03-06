//페이지가 스크롤되면 요소들을 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

  window.addEventListener('scroll', _.throttle(function (){
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소,지속시간,옵션);
      gsap.to(badgeEl, .6, {
        opacity:0,
        display:'none'
      });
      // 탑버튼 보이기
      gsap.to(toTopEl, .2, {
        x: 0
      });

    } else {
      //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity:1,
        display:'block'
      });
      // 탑버튼 숨기기
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 300));
  // _.throttle(함수, 시간)

  toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
      scrollTo: 0
    });
  })

  // 메인 비주얼 이미지 순서대로 나타남
  const fadeEls = document.querySelectorAll('.visual .fade-in');
  fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
      delay: [index + 1] * .7, //0.7 1.4 2.1 2.8
      opacity:1
    });

  });

  // 슬라이드 swiper (수평/수직)
  //new 생성자(클래스)
  new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
  }); 
  new Swiper('.promotion .swiper', {
    slidesPerView:3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay:5000
    },
    loop: true,
    pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true,
    },
    navigation : {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
    }
  });
  new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
      prevEl:'.awards .swiper-prev',
      nextEl: '.awards .swiper-next'
    }
  });
  //위아래로 숨김/보이기 처리
  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;
  promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
      //숨김처리
      promotionEl.classList.add('hide');

    } else {
      // 보임
      promotionEl.classList.remove('hide');
    }
  });


  // 범위 랜덤 함수(소수점 2자리까지)
  function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

  function floatingObject(selector, delay, size) {
    // 
    gsap.to(selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
     {
      y:20,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });

  }
  floatingObject('.floating1', 1, 15);
  floatingObject('.floating2', .5, 15);
  floatingObject('.floating3', 1.5, 20);


  // 스크롤 하다가 어떤 지점이 되면 애니메이션이 실행된다
  const spyEls = document.querySelectorAll('section.scroll-spy');
  spyEls.forEach(function (spyEl) {
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시하는 요소
        triggerHook: .8, //뷰포트의 지점
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());

  });
 