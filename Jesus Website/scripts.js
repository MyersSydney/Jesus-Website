function defaultColors(){
	document.getElementById('skin').style.fill='yellow';
	document.getElementById('hair2').style.fill = '4E311D';
	document.getElementById('skin2').style.fill='E7B493';
	document.getElementById('base2').style.fill='E7B493';
	document.getElementById('shirt22').style.fill='DF5E53';
	document.getElementById('eyes2').style.fill = '3C2E29';
	}
function pose1(){
	document.getElementById('skin').style.opacity=100;
	document.getElementById('hair').style.opacity=100;
	document.getElementById('eyes').style.opacity=100;
	document.getElementById('mouth').style.opacity=100;
	document.getElementById('clothing').style.opacity=100;
	document.getElementById('tie').style.opacity=100;
	
	document.getElementById('skin2').style.opacity=0;
	document.getElementById('base2').style.opacity=0;
	document.getElementById('hair2').style.opacity=0;
	document.getElementById('eyes2').style.opacity=0;
	document.getElementById('shirt2').style.opacity=0;
	document.getElementById('shirt22').style.opacity=0;
}
function pose2(){
	document.getElementById('skin').style.opacity=0;
	document.getElementById('hair').style.opacity=0;
	document.getElementById('eyes').style.opacity=0;
	document.getElementById('mouth').style.opacity=0;
	document.getElementById('clothing').style.opacity=0;
	document.getElementById('tie').style.opacity=0;
	
	document.getElementById('skin2').style.opacity=100;
	document.getElementById('base2').style.opacity=100;
	document.getElementById('hair2').style.opacity=100;
	document.getElementById('eyes2').style.opacity=100;
	document.getElementById('shirt2').style.opacity=100;
	document.getElementById('shirt22').style.opacity=100;

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


