
function cityChange(value) {

	if (value == "2") {
		document.getElementById('beijingsch').style.display="inline-block";
		document.getElementById('chzusch').style.display="none";
	}
	else if (value == "3") {
		document.getElementById('chzusch').style.display="inline-block";
		document.getElementById('beijingsch').style.display="none";
	}else{
		document.getElementById('chzusch').style.display="none";
		document.getElementById('beijingsch').style.display="none";
	}
}

function showIn() {
	document.getElementById('yesSelect').style.display="block";
	document.getElementById('noSelect').style.display="none";
}

function showOut() {
	document.getElementById('noSelect').style.display="block";
	document.getElementById('yesSelect').style.display="none";
}