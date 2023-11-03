function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateCardsOnScroll() {
    const sdCards = document.querySelectorAll('.sd-card');
    let animationDone = false;
  
    function checkVisibility() {
      if (!animationDone) {
        sdCards.forEach((sdCard, index) => {
          if (isElementInViewport(sdCard)) {
            sdCard.classList.add('animate__animated', 'animate__fadeInUp');
            sdCard.style.opacity = 1;
            sdCard.style.transform = 'translateY(0)';
            sdCard.style.transitionDelay = `${index * 0.2}s`; // Add a delay between each card
          }
        });
  
        animationDone = Array.from(sdCards).every(
          (sdCard) =>
            sdCard.classList.contains('animate__animated', 'animate__fadeInUp') &&
            sdCard.style.opacity === '1' &&
            sdCard.style.transform === 'translateY(0)'
        );
      }
    }
  
    checkVisibility();
  
    window.addEventListener('scroll', checkVisibility);
  }
  
  animateCardsOnScroll();
  