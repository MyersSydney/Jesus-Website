var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var poses = document.getElementsByClassName("poses");
  if (n > poses.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = poses.length}
  for (var i = 0; i < poses.length; i++) {
      poses[i].style.display = "none";  
  }
 
  poses[slideIndex-1].style.display = "block";  
}