import $ from 'jquery';


$(document).ready(function(){
	
	$.getJSON('../../assets/json/prices.json', function(data){
		console.log(data);
		$.each(data, function(key, val) {
			console.log('key',key);
			var ar = key;
			var arak = val;
			console.log('ar',ar);
			$('#mainPrice').append(ar);
		});
	});

});