function refreshTable() {
	var elem = document.getElementById('selectBase');
	var base = elem.value;
	var inputInt = document.getElementById('numberInput').value;
	if(inputInt == "") {
		document.getElementById('resultInt').classList.replace('d-block', 'd-none');
		document.getElementById('tableBases').classList.replace('d-table', 'd-none');
		document.getElementById('alertPlaceholder').innerHTML = '<div id="alertNull" class="alert alert-warning alert-dismissable fade show" role="alert">Enter a valid number!<button id="alertDismiss" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
		return;
	}
	var alertCheck = document.getElementById('alertNull');
	if(alertCheck != null) {
		document.getElementById('alertDismiss').click();
	}
	var isNegative = false;
	if(inputInt < 0) {
		inputInt = -inputInt;
		isNegative = true;
	}
	console.log(base);
	if(base === "1") {
		console.log("Base is string " + base);
	}
	var baseInt = parseInt(base, 10);
	if(base === '1') {
		document.getElementById('tableBases').classList.replace('d-none', 'd-table');
		document.getElementById('resultInt').classList.replace('d-block', 'd-none');
		if(document.getElementById('numberInput').value) {
			for(let i = 2; i <= 16; i++) {
				document.getElementById('base' + i).innerHTML = (isNegative == false ? "" : "-") + convertBase(inputInt, i);
			}
		}
		else {
			for(let i = 2; i <= 16; i++) {
				document.getElementById('base' + i).innerHTML = "0";
			}
		}
	}
	else {
		document.getElementById('tableBases').classList.replace('d-table', 'd-none');
		document.getElementById('resultInt').classList.replace('d-none', 'd-block');
		var resultString = "";
		if(!document.getElementById('numberInput').value) {
			document.getElementById('resultInt').textContent = "No value specified."
		}
		else {
			document.getElementById('resultInt').innerHTML = inputInt + "<sub>(10)</sub> = " + (isNegative == false ? "" : "-") + convertBase(inputInt, base) + "<sub>(" + base + ")</sub>";
		}
	}
	
}

function convertBase(inputInt, baseInt) {
	if(inputInt == 0) {
		return "0";
	}
	var chars = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
	var resultString = "";
	while(inputInt >= 1) {
		resultString += chars[(inputInt % baseInt)];
		inputInt = Math.floor(inputInt / baseInt);
	}
	return resultString.split("").reverse().join("");
}