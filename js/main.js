    
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function(element) {
  element.addEventListener('click', open)
})

function open (event) {
  const tabTarget = event.currentTarget;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn--active');
  })
  tabTarget.classList.add('tabs__btn--active')
}





const swiper = new Swiper(".swiper", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },     
    });