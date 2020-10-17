$(document).ready(function () {

    // nav fixed start

    var OfsetTop = $('.custom_nav').offset().top;
    $(window).on('scroll', function () {
        var scroltop = $(window).scrollTop();

        if (scroltop > OfsetTop) {
            $('.custom_nav').addClass('bg');
        } else {
            $('.custom_nav').removeClass('bg');
        }

    });

    // nav fixed end

    /* banner slick start */
    $('.faded').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '.previous',
        nextArrow: '.next',
        arrows: true,
        cssEase: 'linear'
    });
    /* banner slick end */


    /* wow js start */
    new WOW().init();
    /* wow js end */


    /* nav scroll start */
    //scrollspy menu
    $('body').scrollspy({
        target: '.custom_nav',
        offset: 120
    });
    //animation scroll js **************
    $('ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 67
                }, 1000);
                return false;
            }
        }
    });
    /* nav scroll end */


    /* veno-box start */
    $('.venobox').venobox({
        framewidth: '450px',
        spinner: 'cube-grid',
        bgcolor: '#02918c',
        autoplay: true,
    });
    /* veno-box end */

    /* modal plugin video start */
    var videomodal = $(".video_modal iframe");
    $("#video_part").on('hidden.bs.modal', function (e) {
        videomodal.attr("src", videomodal.attr("src"));
    });
    /* modal plugin video end */

    /* testimonial part start */
    $('.content-monial').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1351,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* testimonial part end */


    /* company slick plugin start */
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 800,
        nextArrow: ".nexts",
        prevArrow: ".prevs",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1351,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* company slick plugin end */


    /* card body plugin start */
    $('.full-card').slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        nextArrow: ".turn-right",
        prevArrow: ".turn-left",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* card body plugin end */


    /* counter js start*/
    $('.counter').counterUp({
        time: 1500
    });
    /*counter js end */




    /* sevice part start */
    $('.for_another_device').slick({
        infinite: false,
        arrows: true,
        speed: 500,
        autoplaySpeed: 800,
        autoplay: false,
        nextArrow: ".for_device_forward",
        prevArrow: ".for_device_back",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* service part end */




    /* back to top button start */
    $(window).scroll(function () {
        var windoscroll = $(window).scrollTop();
        if (windoscroll > 800) {
            $('.backtop').fadeIn(800);
        } else {
            $('.backtop').fadeOut(800);
        }
    });
    $(".backtop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1500)
    });
    /* back to top button end */



    /* jquery-filterizr start */
    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    $('.filtr-container').filterizr();
    /* jquery-filterizr end */








});