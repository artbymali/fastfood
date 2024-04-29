function headerAniamtion() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
          // Scrolling down
          if (scrollTop >= 80) {
            header.classList.add('animateOut');
          }
      } else {
            header.classList.remove('animateOut');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  
}
headerAniamtion();

function smoothScroll () {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -11 * t)), // https://www.desmos.com/calculator/brs54l4xou
  
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}
smoothScroll();

gsap.registerPlugin(ScrollTrigger);

gsap.to('.friesOne', {
    scrollTrigger: {
        trigger: '.friesOne',
        start: 'top 80%', // start the animation when the top of the element hits 80% of the viewport
        end: 'bottom top', // end the animation when the bottom of the element hits the top of the viewport
        scrub: 2 // smooth scrubbing effect
    },
    y: -80 // move the fries upwards by 50 pixels
});

gsap.to('.friesTwo', {
    scrollTrigger: {
        trigger: '.friesTwo',
        start: 'top 80%', // start the animation when the top of the element hits 80% of the viewport
        end: 'bottom top', // end the animation when the bottom of the element hits the top of the viewport
        scrub: 2 // smooth scrubbing effect
    },
    y: -80 // move the fries upwards by 50 pixels
});


function hamburgerNav() {
    const parent = document.createElement("div");
    parent.classList.add("bottomBar");
    const childone = document.querySelector('nav')
    parent.appendChild(childone);
    const childtwo = document.querySelector(".Menu_btn")
    parent.appendChild(childtwo);
    const menu = document.querySelector('.menu_left');
    menu.appendChild(parent);
    const OriginalMenu = document.querySelector('menu')
    const hamburger = document.querySelector('.hamburger')
    const overlay = document.querySelector('.overlay')

    hamburger.addEventListener('click', ()=> {
        menu.classList.toggle("menu--open");
        hamburger.classList.toggle("hamburger--open")
        overlay.classList.toggle('overlay-open')
        OriginalMenu.classList.toggle('TogMenu')

        if (menu.classList.contains("menu--open")) {
            childone.style.display = 'block';
            childtwo.style.display = 'block';
        } else {
            childone.style.display = 'none';
            childtwo.style.display = 'none';
        }
        
    })
}

hamburgerNav()