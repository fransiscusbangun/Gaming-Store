var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide : 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },

  });


//  pdoduct filter
(function (){
  const buttons = document.querySelectorAll('.btn')
  const storeItems = document.querySelectorAll('.store-item')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter

      storeItems.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block'
        } 
        else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block'
          } else {
            item.style.display = 'none'
          }
        }
      })
    })
  })
 })();

 (function() {
  const searchBox = document.querySelector('#search-item')
  const storeItems = document.querySelectorAll('.store-item')

  searchBox.addEventListener('keyup', (e) => {

    const searchFilter = e.target.value.toLowerCase().trim()

    storeItems.forEach((item) => {
      if(item.textContent.includes(searchFilter)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
 })();