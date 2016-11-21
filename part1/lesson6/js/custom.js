$(function () {



    /* Smooth scroll to Plans Block
     ====================================*/

    $("#js-get-started").on("click", function (e) {

        e.preventDefault();
        var plansOffset = $("#js-plans").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset
        }, 500);

    });


    /* Fixed header when scroll
     ====================================*/

    var headerH = $("#js-header").height(),
        navH = $("#js-nav-container").innerHeight();

    $(document).on("scroll", function () {

        var documentScroll = $(this).scrollTop();

        if (documentScroll > headerH) {
            $("#js-nav-container").addClass("fixed");

            $("#js-header").css({
                "paddingTop": navH
            });
        } else {
            $("#js-nav-container").removeClass("fixed");
            $("#js-header").removeAttr("style");
        }

    });


    /* Smooth scroll to the pages block
     ====================================*/

    var $navLinks = $('#js-nav a');
    $navLinks.on('click',function (e) {
        e.preventDefault();
        var $currentBlock=$(this).attr('href');
        var $currentBlockOffset=$($currentBlock).offset().top;
        $('html, body').animate({
            'scroll-top': $currentBlockOffset
        },500);
    });


});
