document.addEventListener("DOMContentLoaded", function(){

	var search = document.querySelector('#search-index');
	var drop_search = document.querySelector('#fix-search');
	search.onclick = function(){
		drop_search.classList.toggle('appear');
	}

}, false)