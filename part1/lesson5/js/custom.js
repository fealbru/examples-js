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

    var $header = $('#js-header');
    var $navContainer = $('#js-nav-container');
    var $navContainerH = $navContainer.innerHeight();

    $(document).on('scroll', function () {
        var $documentScroll = $(this);
        if ($documentScroll.scrollTop() > $header.height()) {
            $navContainer.addClass('fixed');
            $header.css({
                'padding-top': '+' + $navContainerH + 'px'
            });
        } else {
            $navContainer.removeClass('fixed');
            $header.css({
                'padding-top': '-=' + $navContainerH + 'px'
            });
        }
        ;

    });


});
