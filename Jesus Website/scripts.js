function defaultColors(){
	document.getElementById('hair').style.fill = '4E311D';
	document.getElementById('skin').style.fill='E7B493';
	document.getElementById('base').style.fill='E7B493';
	document.getElementById('shirt2').style.fill='DF5E53';
	document.getElementById('shirt').style.fill = 'white';
	document.getElementById('eyes').style.fill = '3C2E29';
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





