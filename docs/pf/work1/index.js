// 이미지 로딩 기다리기
$('body').imagesLoaded(function() {
  SectionEffect__init();
});

function SectionEffect__init() {
  // box-2 : 개요 아이템
  gsap.from('.box-2', {
    ease: Expo.easeIn,
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-2',
    }
  });

  // box-3 : 디자인 아이템
  gsap.from('.box-3', {
    ease: Expo.easeIn,
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-3',
    }
  });

  // box-4 : 와이어프레임 아이템
  gsap.from('.box-4', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-4',
    }
  });

  // box-5 : 스플래쉬 아이템
  gsap.from('.box-5', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.box-5',
    }
  });


  // box-6-1 : 설문조사 아이템1
  gsap.from('.box-6-1', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-6-1',
    }
  });


  // box-6-2 : 설문조사 아이템2
  gsap.from('.box-6-2', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: '.box-6-2',
    }
  });

  // box-7-1 : 파생페이지 아이템1
  gsap.from('.box-7-1', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.box-7-1',
    }
  });

  // box-7-2-1 : 파생페이지 아이템2-1
  gsap.from('.box-7-2-1', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-7-2-2',
    }
  });

  // box-7-2-2 : 파생페이지 아이템2-2
  gsap.from('.box-7-2-2', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-7-2-2',
    }
  });

  // box-7-3 : 파생페이지 아이템3
  gsap.from('.box-7-3', {
    ease: Expo.easeIn,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.box-7-3',
    }
  });

  // box-8-1 : 필터 아이템1
  gsap.from('.box-8-1', {
    ease: "slow(0.7, 0.7, false)",
    opacity: 0,
    x: -300,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.box-8-1',
    }
  });

  // box-8-2 : 필터 아이템1
  gsap.from('.box-8-2', {
    ease: "slow(0.7, 0.7, false)",
    opacity: 0,
    x: 300,
    duration: 1.5,
    delay: 1,
    scrollTrigger: {
      trigger: '.box-8-2'
    }
  });

  // box-10 : 필터 아이템1
  gsap.from('.box-10', {
    ease: "bounce.out",
    opacity: 0,
    y: -100,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.box-10',
    }
  });
}