gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "780",
        scrub: true,
      },
    }
  );

  // Left
  let arrayImgLeft = gsap.utils.toArray(".left > .main-section__img");
  arrayImgLeft.forEach((img) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        x: -500,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: img,
          start: "-1500",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  // Right
  let arrayImgRight = gsap.utils.toArray(".right > .main-section__img");
  arrayImgRight.forEach((img) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        x: 500,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: img,
          start: "-1500",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
