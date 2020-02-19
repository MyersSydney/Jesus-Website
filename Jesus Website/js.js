function changeImageleft()
{
var img = document.getElementById("image");
img.src="images/test2.jpg";
return false;
}

function changeImageright()
{
var img = document.getElementById("image");
img.src="images/test.jpg";
return false;
}

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();

image1.src="images/test.jpg";
image2.src="images/test2.jpg";
image3.src="images/test3.jpg";

var step = 1;

function slidenext() {
  document.images.slide.src = eval("image" + step + ".src");
  if (step < 3){ 
     step++;
   }
   else{ 
    step = 1;
    }
}

function slideprev() {
  document.images.slide.src = eval("image"+step+".src");
      if (step <= 3 && step > 3){ 
         step--;
        }
        else{ 
             step = 3;
        }
    }
    
//trying something different here

var slIndex = [1,1];
var slId = ["1","2"];
showSlides(1,0);
showSlides(1,1);

function addSlides(n, no){
	showSlides(slidesIndex[no] +=n,no);
}		
function showSlides(n, no){
	var numOfSlide = document.getElementsbyClassName(slId[no]);
	
	if(n > numOfSlide.length){
		slIndex[no] = 1;
	}
	if(n < 1){
	slidex[no] = numOfSlide.length;
	}
	for(var i = 0; i < numOfSlide.length; i++){
		numOfSlide[i].style.display = "none";
	}
	x[slideIndex]
}	
	




