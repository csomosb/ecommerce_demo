var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("product-image-main");
	var dots = document.getElementsByClassName("gallery-image-small");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classname += " active";
}

var i;
var relatedImage = document.getElementsByClassName("related-image-div");
for (i = 0; i < relatedImage.length; i++) {
	relatedImageWidth = relatedImage[i].offsetWidth;
       relatedImage[i].style.height = relatedImageWidth + "px";
}

 
	

