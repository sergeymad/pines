// // Import vendor jQuery plugin example
import '~/app/libs/jquery/jquery.js'
import '~/app/libs/owl/owl.js'

document.addEventListener('DOMContentLoaded', () => {
	$(window).on('resize',function(){
		if(screen.width>=1200){
            $(".first_screen").css("min-height",(window.innerHeight-$("header").outerHeight())*1.3)
		}else if(screen.width>=992){
            $(".first_screen").css("min-height",(window.innerHeight-$("header").outerHeight()))
		}
        else if(screen.width>=992){
            $(".first_screen").css("min-height",(window.innerHeight-$("header").outerHeight()))
        }

    })
    $(window).trigger('resize')
	$(document).on("click",".product .variations .item",function (e) {
		e.preventDefault()
		$(this).parents(".product").find(".variations .item").removeClass("active")
		$(this).addClass("active")
    })
    $(".sandwich").on("click", function () {
        $("nav").slideToggle()
        $(".sandwich").toggleClass("active")

    })
    $(".trigger").on("click", function () {
        $(".filters").toggleClass("active")

    })
    $(".popular_carousel.owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4

            },
            1200: {
                items: 5
            }
        }
    })
})
