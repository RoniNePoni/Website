$(function () {


    // проверка
    console.log("Hello world!");

    // гланая страница

    $('.zagolovok').hover(
        function() {
          $('.gifka').css('display', 'block');
        },
        function() {
          $('.gifka').css('display', 'none');
        }
      );

      $('.grid1').hover(
        function() {
          $('.gifon').css('display', 'block');
        },
        function() {
          $('.gifon').css('display', 'none');
        }
      );

      $('.grid2').hover(
        function() {
          $('.gifon2').css('display', 'block');
        },
        function() {
          $('.gifon2').css('display', 'none');
        }
      );

      $('.grid3').hover(
        function() {
          $('.gifon3').css('display', 'block');
        },
        function() {
          $('.gifon3').css('display', 'none');
        }
      );

    //   переход на страницу для пространства

      $('.gridtext1').click(function() {
        window.location.href = "house.html";
      });

      $('.prost').hover(
        function() {
          $('.gif3').css('display', 'block');
        },
        function() {
          $('.gif3').css('display', 'none');
        }
      );

      $('.planim').hover(
        function() {
          $(this).css('transform', 'rotate(-5deg) scale(1.20)');
          $(this).css('z-index', '4');
        },
        function() {
          $(this).css('transform', 'none');
          $(this).css('z-index', 'auto');
        }
      );

      $('.strahim').hover(
        function() {
          $(this).css('transform', 'scale(1.20)');
          $(this).css('z-index', '4');
        },
        function() {
          $(this).css('transform', 'none');
          $(this).css('z-index', 'auto');
        }
      );

      $('.radim').hover(
        function() {
          $(this).css('transform', 'rotate(5deg) scale(1.20)');
          $(this).css('z-index', '4');
        },
        function() {
          $(this).css('transform', 'none');
          $(this).css('z-index', 'auto');
        }
      );

      $('.agrim').hover(
        function() {
          $(this).css('transform', 'rotate(3deg) scale(1.20)');
          $(this).css('z-index', '4');
        },
        function() {
          $(this).css('transform', 'none');
          $(this).css('z-index', 'auto');
        }
      );

      $('.sadim').hover(
        function() {
          $(this).css('transform', 'rotate(-3deg) scale(1.20)');
          $(this).css('z-index', '4');
        },
        function() {
          $(this).css('transform', 'none');
          $(this).css('z-index', 'auto');
        }
      );

      $(document).ready(function() {
      $('.burger').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').toggle();
      });
    })

    $('.menu-link').click(function(e) {
        e.preventDefault();
        let href = $(this).attr('href');
        window.location.href = href;
      });

      $('.planim').click(function(e) {
        e.preventDefault();
        let href = $(this).attr('href');
        window.location.href = href;
      });

      
    $('.plan1').mouseenter(function() {
          $('.plan2').fadeIn();
      });
  
    $('.plan1').mouseleave(function() {
          $('.plan2').fadeOut();
      });

    //   переход на страничку страха

    $('.strahim').click(function() {
            window.location.href = "strah.html";
      });

      //   переход на страничку радости

      $('.radim').click(function() {
        window.location.href = "rad.html";
  });

    $('.gridtext3').click(function() {
        window.location.href = "anons.html";
  });

  $('.image-container img').click(function() {
    $('.image-container img').removeClass('active');
    $(this).addClass('active');
  });

  $('.image-container img').hover(
    function() {
      $(this).css({
        filter: 'none',
        transform: 'scale(1.6) rotate(5deg)',
        zIndex: '1'
      });
    },
    function() {
      $(this).css({
        filter: 'blur(2px)',
        transform: 'none',
        zIndex: '0'
      });
    }
  );
  // Остановка бегущей строки при наведении на нее
  $('.marquee-wrapper').mouseenter(function() {
    $(this).css('animation-play-state', 'paused');
  }).mouseleave(function() {
    $(this).css('animation-play-state', 'running');
  });

  $('.prost2').hover(
    function() {
      $('.gifok').css('display', 'block');
    },
    function() {
      $('.gifok').css('display', 'none');
    }
  );

  $('.add').on('click', function() {
    $('.add').hide();
    $('.done').show();
  });

  $(".add, .add2, .add3, .add4 ").click(function() {
    $(".add, .add2, .add3, .add4").hide();
    $(".container").addClass("blurred");
    $(".overlay").fadeIn();
    $(".spasibo").fadeIn();
  });

  $(".reserve ").click(function() {
    $(".add, .add2, .add3, .add4").hide();
    $(".container").addClass("blurred");
    $(".overlay").fadeIn();
    $(".spasibo2").fadeIn();
  });



  

   

    


})