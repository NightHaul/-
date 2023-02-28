'use strict'
{
  $(function () {
    $(".sab-img img:not(:first-child)").hide();
    setInterval(function () {
      $(".sab-img img:first-child").fadeOut(3000).next("img").fadeIn().end().appendTo(".sab-img");
    }, 5000);
  });


  $(function(){
    $('.service1').on(".service1", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass(".is-fadein");
      } else {
        $(this).stop().removeClass(".is-fadein");
      }
    });
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.text1').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.text1').addClass('is-fadein');
  });


  // $(window).scroll(function () {
  //   const windowH = $(window).height(),
  //     scrollY = $(window).scrollTop();

  //   $('.service1').each(function () {
  //     const thisPosition = $(this).offset().top;
  //     const thisHeight = $(this).height();
  //     if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
  //       $(this).addClass('is-fadein');

  //     } else {
  //       $(this).removeClass('is-fadein');
  //     }
  //   });
  // });
  // $(window).on('load', function () {
  //   $('.service1').addClass('is-fadein');
  // });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.service2').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.service2').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.service3').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.service3').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.fade').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.fade').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.link').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.link').addClass('is-fadein');
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.link2').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.link2').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('h1').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('h1').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.line').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.line').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.vision').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.vision').addClass('is-fadein');
  });



  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();
    $('.total-vision').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('delay-fadein');
      } else {
        $(this).removeClass('delay-fadein');
      }
    });
  });

  $(window).on('load', function () {
    $('.total-vision').delay(500).queue(function () {
      $('.total-vision').addClass('delay-fadein');
    });
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.news').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.news').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('table').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('table').addClass('is-fadein');
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.zyuusyo-img').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.zyuusyo-img').addClass('is-fadein');
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.main-text').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.main-text').addClass('is-fadein');
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.box').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.box').addClass('is-fadein');
  });

  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.recruit1').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('is-fadein');

      } else {
        $(this).removeClass('is-fadein');
      }
    });
  });
  $(window).on('load', function () {
    $('.recruit1').addClass('is-fadein');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.recruit2').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('delay-fadein2');

      } else {
        $(this).removeClass('delay-fadein2');
      }
    });
  });
  $(window).on('load', function () {
    $('.recruit2').addClass('delay-fadein2');
  });


  $(window).scroll(function () {
    const windowH = $(window).height(),
      scrollY = $(window).scrollTop();

    $('.recruit3').each(function () {
      const thisPosition = $(this).offset().top;
      const thisHeight = $(this).height();
      if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
        $(this).addClass('delay-fadein3');

      } else {
        $(this).removeClass('delay-fadein3');
      }
    });
  });
  $(window).on('load', function () {
    $('.recruit3').addClass('delay-fadein3');
  });







}