$(document).ready(function () {

    /*Toggle classes of header*/
    $(function () {
        var header = $(".header-1");
        //var headerIndex = $("#header-index");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (window.location.pathname == "/ASTELECOM/index.html" && scroll >= 650) {
                header.removeClass('header-1').addClass("header-alt");
            } else if (scroll >= 250) {
                header.removeClass('header-1').addClass("header-alt");
            } else {
                header.removeClass("header-alt").addClass('header-1');
            }

        });
    });

    /*Toggle classes of header in INDEX*/
    /*      $(function() {
            var header = $("#header-index");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 650) {
                    header.removeClass('header-1').addClass("header-alt");
                } else {
                    header.removeClass("header-alt").addClass('header-1');
                }
            });
        }); */


});