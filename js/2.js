document.addEventListener("DOMContentLoaded", function(){

	
	drop_tour_list();
	drop_tour_list_2();
	drop_tour_list_3();
	drop_tour_list_4();
	drop_tour_list_5();
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

function drop_tour_list_2() {
	var pop_up_t_2 = document.querySelector('#pop-up-map-2');
	var drop_t_2 = document.querySelector('#drop-map-t-2');
	var esc_t_2 = document.querySelector('#esc-map-t-2');
	var nen_2 = document.querySelector('#nen');

	pop_up_t_2.onclick = function(){
		console.log('obj');
		drop_t_2.classList.add('show');
		nen_2.classList.add('nen-den');
	}

	esc_t_2.onclick = function(){
		drop_t_2.classList.remove('show');
		nen_2.classList.remove('nen-den');
	}
}


function drop_tour_list_3() {
	var pop_up_t_3 = document.querySelector('#pop-up-map-3');
	var drop_t_3 = document.querySelector('#drop-map-t-3');
	var esc_t_3 = document.querySelector('#esc-map-t-3');
	var nen_3 = document.querySelector('#nen');

	pop_up_t_3.onclick = function(){
		console.log('obj');
		drop_t_3.classList.add('show');
		nen_3.classList.add('nen-den');
	}

	esc_t_3.onclick = function(){
		drop_t_3.classList.remove('show');
		nen_3.classList.remove('nen-den');
	}
}


function drop_tour_list_4() {
	var pop_up_t_4 = document.querySelector('#pop-up-map-4');
	var drop_t_4 = document.querySelector('#drop-map-t-4');
	var esc_t_4 = document.querySelector('#esc-map-t-4');
	var nen_4 = document.querySelector('#nen');

	pop_up_t_4.onclick = function(){
		console.log('obj');
		drop_t_4.classList.add('show');
		nen_4.classList.add('nen-den');
	}

	esc_t_4.onclick = function(){
		drop_t_4.classList.remove('show');
		nen_4.classList.remove('nen-den');
	}
}

function drop_tour_list_5() {
	var pop_up_t_5 = document.querySelector('#pop-up-map-5');
	var drop_t_5 = document.querySelector('#drop-map-t-5');
	var esc_t_5 = document.querySelector('#esc-map-t-5');
	var nen_5 = document.querySelector('#nen');

	pop_up_t_5.onclick = function(){
		console.log('obj');
		drop_t_5.classList.add('show');
		nen_5.classList.add('nen-den');
	}

	esc_t_5.onclick = function(){
		drop_t_5.classList.remove('show');
		nen_5.classList.remove('nen-den');
	}
}


function keydownHandler(evt){
	var drop_t = document.querySelector('#drop-map-t-1');
	var nen = document.querySelector('#nen');
	var drop_t_2 = document.querySelector('#drop-map-t-2');
	var nen_2 = document.querySelector('#nen');
	var drop_t_3 = document.querySelector('#drop-map-t-3');
	var nen_3 = document.querySelector('#nen');
	var drop_t_4 = document.querySelector('#drop-map-t-4');
	var nen_4 = document.querySelector('#nen');
	var drop_t_5 = document.querySelector('#drop-map-t-1');
	var nen_5 = document.querySelector('#nen');

	drop_t.classList.remove('show');
	nen.classList.remove('nen-den');
	drop_t_2.classList.remove('show');
	nen_2.classList.remove('nen-den');
	drop_t_3.classList.remove('show');
	nen_3.classList.remove('nen-den');
	drop_t_4.classList.remove('show');
	nen_4.classList.remove('nen-den');
	drop_t_5.classList.remove('show');
	nen_5.classList.remove('nen-den');

}