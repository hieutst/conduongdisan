document.addEventListener("DOMContentLoaded", function(){

	search();
	drop_map();
	drop_map_two();
	drop_tour_list();
}, false)

function search(){
	var search = document.querySelector('#search-index');
	var drop_search = document.querySelector('#fix-search');
	var html = document.querySelector('#index');
	console.log(html);
	search.onclick = function(){
		drop_search.classList.toggle('appear');
	}
}

function drop_map() {
	// body...
	var view_road = document.querySelector('#view-map');
	var drop_map = document.querySelector('#drop-map');
	var nen = document.querySelector('#nen');
	var esc = document.querySelector('#esc-map');

	view_road.onclick = function(){
		drop_map.classList.toggle('show');
		nen.classList.add('nen-den');
	}

	esc.onclick = function(){
		drop_map.classList.remove('show');
		nen.classList.remove('nen-den');
	}
}

function drop_map_two() {
	// body...
	var view_road = document.querySelector('#view-map-2');
	var drop_map = document.querySelector('#drop-map-2');
	var nen = document.querySelector('#nen');
	var esc = document.querySelector('#esc-map-2');

	view_road.onclick = function(){
		drop_map.classList.toggle('show');
		nen.classList.add('nen-den');
	}

	esc.onclick = function(){
		drop_map.classList.remove('show');
		nen.classList.remove('nen-den');
	}
}



function keydownHandler(evt)  {
    var view_road = document.querySelector('#view-map');
	var drop_map = document.querySelector('#drop-map');
	var nen = document.querySelector('#nen');
	var esc = document.querySelector('#esc-map');
	var drop_map2 = document.querySelector('#drop-map-2');
	var nen2 = document.querySelector('#nen');
	var esc2 = document.querySelector('#esc-map-2');
	drop_map.classList.remove('show');
	nen.classList.remove('nen-den');
	drop_map2.classList.remove('show');
	nen2.classList.remove('nen-den');
}

