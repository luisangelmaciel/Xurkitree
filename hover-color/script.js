/*******************************

THERE IS A CSS ONLY APPROACH 
By Christopher Grabinski (@chrisgrabinski) 
You can find it here: https://codepen.io/chrisgrabinski/pen/dDbFt

********************************/

/*******************************

THERE IS A MUCH CLEANER JS-PEN
With it you can add social media icons without having to update your javascript
by Jesse Shawl (@jshawl) 
You can find it here: 
https://codepen.io/jshawl/pen/nHefA

********************************/

$(".twitter").hover(function () {
	$("#social-section").toggleClass("color-twitter")
});

$(".facebook").hover(function () {
	$("#social-section").toggleClass("color-facebook")
});

$(".googleplus").hover(function () {
	$("#social-section").toggleClass("color-googleplus")
});

$(".pinterest").hover(function () {
	$("#social-section").toggleClass("color-pinterest")
});

$(".dribbble").hover(function () {
	$("#social-section").toggleClass("color-dribbble")
});

$(".instagram").hover(function () {
	$("#social-section").toggleClass("color-instagram")
});