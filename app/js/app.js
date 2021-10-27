// // Import vendor jQuery plugin example
import '~/app/libs/jquery/jquery.js'

document.addEventListener('DOMContentLoaded', () => {
	$(window).on('resize',function(){
		if(screen.width>=1200){
            $(".first_screen").css("min-height",(window.innerHeight-$("header").outerHeight())*1.3)
		}else if(screen.width>=992){
            $(".first_screen").css("min-height",(window.innerHeight-$("header").outerHeight()))
		}

    })
    $(window).trigger('resize')
	$(document).on("click",".product .variations .item",function (e) {
		e.preventDefault()
		$(this).parents(".product").find(".variations .item").removeClass("active")
		$(this).addClass("active")
    })
})
