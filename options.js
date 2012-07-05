
	// Creates array for the optionfields
	var optionfields = {host:"host",port:"port",username:"username",password:"password"}; 

	// Saves options to localStorage.
	var fieldentry;
	function reload(){
		window.location.reload();
	}
	function save_options() {
		var tempsave;
		var tempid_save;
		for (fieldentry in optionfields){
			tempid_save = optionfields[fieldentry];
			tempsave = document.getElementById(fieldentry).value;
			localStorage[tempid_save] = tempsave;
		}
		chrome.extension.getBackgroundPage().updateSetting();
		document.getElementById('saveid').innerHTML+='saved settings';
		console.log("saved settings");
		setTimeout(reload, 500);
	}

	function restore_options() {
		var temprestore, templocal, tempid_restore;
		for (fieldentry in optionfields){
			tempid_restore = optionfields[fieldentry];
			var templocal = localStorage[tempid_restore];
			if (!templocal){
				return;
			}
			var temprestore = document.getElementById(tempid_restore);
			temprestore.value = templocal;
		}
	}

	function clickHandler(e) {
		setTimeout(save_options, 10);
	}
	document.addEventListener('DOMContentLoaded', function () {
		restore_options();
		document.querySelector('button').addEventListener('click', clickHandler);
	});
