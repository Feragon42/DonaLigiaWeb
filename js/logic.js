function showPrincipalNew (image, header, description, date){
	var container = document.getElementById("actualNew");
	container.innerHTML = "<img id='principalNewPhoto' src="+image+"><h1>"+header+"</h1><p align=justify>"+description+"</p><p><small>"+date+"</small></p>";
}