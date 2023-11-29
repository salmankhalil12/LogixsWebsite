

// Slider 2
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 15,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });


  // Section1 Slider
  var swiper = new Swiper(".mySwiper", {
    autoplay:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // FANCY BOX
Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: true,
    Toolbar: false,
  
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
  });