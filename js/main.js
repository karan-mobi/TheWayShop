$('.sec-one-content-wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
        }
    ]    
  });


  $('.sec-seven-content-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
        }
    ]
});


  // $('.sec-seven-content-wrapper').slick({
  //   settings: "unslick",
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true
  //       }
  //     }sec-eight-content-wrapper
  //   ]
  // });



  $('.sec-eight-content-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 767,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
        }
    ]
});


  // $('.sec-eight-content-wrapper').slick({
    
  //   settings: "unslick",
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots : true
  //       }
  //     }
  //   ]
  // });

  fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
  }).then((data) => {
    data.forEach((ele) => {
        document.querySelector('foot-ajax ul').insertAdjacentHTML('beforeend', 
        `
                <li>${ele.name}</li>
            
        `)
    });
  })

  