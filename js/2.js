document.addEventListener("DOMContentLoaded", function(){

	
	drop_tour_list();
}, false)













function drop_tour_list() {
	var pop_up_t = document.querySelector('#pop-up-map-1');
	var drop_t = document.querySelector('#drop-map-t-1');
	var esc_t = document.querySelector('#esc-map-t-1');
	var nen = document.querySelector('#nen');

	pop_up_t.onclick = function(){
		console.log('obj');
		drop_t.classList.add('show');
		nen.classList.add('nen-den');
	}

	esc_t.onclick = function(){
		drop_t.classList.remove('show');
		nen.classList.remove('nen-den');
	}
}