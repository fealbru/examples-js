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

    $("#js-nav a").on("click", function (e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 500);

    });


    /* Modals
     ====================================*/

    $(".js-show-modal").on("click", function (e) {

        e.preventDefault();

        var currentModal = $(this).attr("href");

        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");

    });


    $("#js-overlay, .js-modal-close").on("click", function (e) {

        e.preventDefault();
        $(".js-modal, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");

    });

    /* FAQ
     ====================================*/

    var $faqContents = $('.js-faq-content');
    var $faqTitles = $('.js-faq-title');
    $faqContents.slideUp();
    $faqTitles.on('click', function (e) {
        e.preventDefault();
        var $self = $(this);

        if (!$self.hasClass('active')) {
            $faqContents.slideUp();
            $faqContents.removeClass('active');
        };

        $self.toggleClass('active');
        $self.next().slideToggle();
    });


});
