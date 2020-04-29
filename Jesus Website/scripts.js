function defaultColors(){
	hair = document.getElementsByClassName('hair');
	for(let i = 0; i < array.length; i++){
		hair[i].style.fill = blue;
	}
	document.getElementsByClassName('hair').style.fill = '4E311D';
	document.getElementsByClassName('skin').style.fill='E7B493';
	document.getElementsByClassName('base').style.fill='E7B493';
	document.getElementsByClassName('shirt2').style.fill='DF5E53';
	document.getElementsByClassName('shirt').style.fill = 'white';
	document.getElementsByClassName('eyes').style.fill = '3C2E29';
	}

var jesuses= ['jesus1', 'jesus2', 'jesus3'];
function pose1(id){
	document.getElementById(id).style.visibility = "visible";
	
	for(let i = 0; i < jesuses.length; i++){
		if(jesuses[i] != id){
			document.getElementById(jesuses[i]).style.visibility = "hidden";
		}
	}
}


function getElementsById(ids) {
    var idList = ids.split(" ");
    var results = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            results.push(item);
        }
    }
    return(results);
}

var scale = Math.min( 
  availableWidth / contentWidth, 
  availableHeight / contentHeight 
);

function fill (classname, color){
	array = document.getElementsByClassName(classname);
	for(let i = 0; i < array.length; i++){
		array[i].style.fill = color;
	}
}


