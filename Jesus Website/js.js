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
  document.images.slide.src = "image"+step+".src";
      if (step <= 3 && step > 3){ 
         step--;
        }
        else{ 
             step = 3;
        }
    }




