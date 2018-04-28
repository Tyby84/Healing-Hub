import $ from 'jquery';


$(document).ready(function(){
	
	$.getJSON('../../assets/json/prices.json', function(data){
		
		let min60 = data["60min"];
		let min90 = data["90min"];
		let min120 = data["120min"];
		
		$('span.60min').append(min60);
		$('span.90min').append(min90);
		$('span.120min').append(min120);
		
		
	});

});