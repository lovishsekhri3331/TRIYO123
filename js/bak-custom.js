wow = new WOW({
    mobile: false
})
wow.init();

$('.down-to-div').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 120
            }, 1000);
            return false;
        }
    }
});


$('.solution-links-section .solution-links-col a').on("click",function(e){
    $('.solution-links-section .solution-links-col a').removeClass('active');
    $(this).addClass('active');
});


$(".partner-carousel").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    arrows: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

$(".features-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 500,
    arrows: true,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
});

$(".testimonial-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 500,
    arrows: true,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                autoplay: true
            }
        }
    ]
});

// deepak code begin
$(document).ready(function(){

    $('.sidebar-nav a').on("click", function(e){
        $('.sidebar-nav li').removeClass('active');
        $(this).parent('li').addClass('active')
    });


//     var windowHeight = $(window).height();
//     var sidebar = $('.sidebar-nav');
//     var sidebarNextSectionTop = $('.testimonial-section').offset().top;

//     var footerTop = $('footer').offset().top;

// //    $('.sidebar-content__wrapper').scrollspy({ target: '#sidebar-menu' });

//     if (sidebar.length) {

//         var navbarHeight = $('.navbar').height();

//         var sidebarContent = $('.sidebar-content__wrapper');
//         var sidebarTop = sidebar.offset().top;
//         var sidebarContentTop = sidebarContent.offset().top;

//         var sidebarContentHeight = sidebarContent.outerHeight();

//         var sidebarContentBottom = sidebarContentTop + sidebarContentHeight;
//         var threshold = sidebarTop - 40;

//         var sidebarParent = $('.sidebar-controls__inner');
//         var sidebarParentWidth = sidebarParent.innerWidth() + 30; // gutter:30

//     };

//      if ($(window).width() <= 768) {
//         $(window).scroll(function(e){
//             sidebarScroll();
//         });

//         function sidebarScroll() {
//             var currentScroll = $(window).scrollTop();

//             if (currentScroll > threshold){
//                 $('.sidebar-controls__inner').addClass('sidebar-nav--fixed');
//     //            console.log('threshold: '+threshold+'============= currentScroll:'+currentScroll+'================sidebarContentHeight: '+sidebarContentHeight);
//                 var scrollRatio = sidebarContentBottom - currentScroll;
//                 var scrollTimes = sidebarParentWidth / scrollRatio;
//                 var magic = scrollTimes * sidebarParentWidth * -1;

//                 $('.sidebar-nav--fixed .sidebar-nav').css('transform', 'translateX('+magic+'px)');
//                 console.log(magic);

//             }
//             if (currentScroll < threshold){
//                 $('.sidebar-controls__inner').removeClass('sidebar-nav--fixed');
//             }
//             if (currentScroll > sidebarNextSectionTop) {
//                 $('.sidebar-controls__inner').removeClass('sidebar-nav--fixed');
//             }
//         }
//     }
// });

// deepak code end

// if($('.fixed-sidebar-wrapper').length > 0 ) {
//     $(window).scroll(function() {

//         if ($(window).width() <= 768) {
//             VerticalMenuFunction();
//             verticalMenuActiveScroll();
//         }
//     });
// }

    if($('.fixed-sidebar-wrapper').length > 0 ) {
        $(window).scroll(function() {

            if ($(window).width() <= 767) {
                VerticalMenuFunction();
                verticalMenuActiveScroll();
            }
        });
    }
    function VerticalMenuFunction() {
        var currentScroll = $(window).scrollTop();
        var vmSectionTop = $(".ciciw-section").offset().top;
        var vmNextSection = $('.testimonial-section').offset().top;
        var VmSelector = $('.sidebar-controls__inner');

            if (currentScroll > vmSectionTop) {
                $(VmSelector).addClass("sidebar-nav--fixed");
            } else {
                $(VmSelector).removeClass("sidebar-nav--fixed");
            }

            if (scroll > vmNextSection) {
                $(VmSelector).removeClass("sidebar-nav--fixed");
            }
    }

    // scrollingItemTotal = 0;
    // function deepak() {
    //     var scrollingItem = $('.list-group-item');
    //     $('.list-group-item').each(function(index) {
    //         scrollingItemTotal += parseInt($(this).width(), 10);


    //     });
    //     console.log(scrollingItemTotal);
    // }
    // deepak();

    function verticalMenuActiveScroll() {
        $('.sidebar-content').on("scroll", function () {
            var currentSection = $(this).scrollTop();

            var windowHeight = $(document).height();
            var sectionHeight = $('.ciciw-section').height();
            var sectionWidth = $('.ciciw-section').width();
            var newVal = (currentSection - (sectionHeight / sectionWidth)) / 10;
            $('.sidebar-nav').css("transform", "translateX(" + (-newVal) + "px)");
        });
    }
});
