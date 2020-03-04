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
  var pose = document.getElementsByClassName("pose");
  if (n > pose.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = pose.length}
  for (i = 0; i < pose.length; i++) {
      pose[i].style.display = "none";  
  }
  pose[slideIndex-1].style.display = "block";  
}
