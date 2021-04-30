var wow = new WOW({
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

    var NavStickyClassName = 'sidebar-nav--fixed';


    $('.sidebar-nav a').on("click", function(e){
        $('.sidebar-nav li').removeClass('active');
        $(this).parent('li').addClass('active')
    });

    

    if($('.fixed-sidebar-wrapper').length > 0 ) {
        $(window).scroll(function() {
            if ($(window).width() <= 767) {
                VerticalMenuFunction();
            }
        });
        $('#sidebar-menu-cont').on("scroll resize",function(){
            if ($(window).width() <= 767) {
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
                $(VmSelector).addClass(NavStickyClassName);
            } else {
                $(VmSelector).removeClass(NavStickyClassName);
            }

            if (currentScroll > vmNextSection) {
                $(VmSelector).removeClass(NavStickyClassName);
            }
    }

    function verticalMenuActiveScroll(){
        try{
            var activeAnchorItem = $('#sidebar-menu').find("li.active a")[0].getBoundingClientRect(),
            bodyElement = $('body')[0].getBoundingClientRect(),
            sidebarMenuParent = $("#sidebar-menu-parent"),
            activeAnchorItemPosition = activeAnchorItem.x + activeAnchorItem.width,
            activeAnchorScroll = 0;

            if(activeAnchorItemPosition > bodyElement.width){
                activeAnchorScroll = sidebarMenuParent.scrollLeft() + activeAnchorItem.width;
                sidebarMenuParent.animate({scrollLeft: activeAnchorScroll}, 50);
            } else if(activeAnchorItem.x < 0){
                activeAnchorScroll = sidebarMenuParent.scrollLeft() - activeAnchorItem.width;
                sidebarMenuParent.animate({scrollLeft: activeAnchorScroll}, 50);
            }
        }catch(e){}
    }
    $("#playButton").click(function(){
        $("#triyo-video").attr("controls","");
        $("#triyo-video").get(0).play();
        $("#playButton").hide();
    });
});
