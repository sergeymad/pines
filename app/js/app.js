// // Import vendor jQuery plugin example
import '~/app/libs/jquery/jquery.js'

document.addEventListener('DOMContentLoaded', () => {

	$(".first_screen").css("min-height",window.innerHeight-$("header").outerHeight())

})
