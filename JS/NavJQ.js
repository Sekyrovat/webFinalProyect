$('.Sect').on('click',function(event){
	let $currentElement=$(this);
	console.log($currentElement.attr('id'));
	$('.selected').removeClass('selected');
	$($currentElement).addClass('selected');
	$('main > section').addClass('is-hidden'); 
	$('body').removeAttr("style");
	if($currentElement.attr('id')=="Home"){
		$('body').css("overflow", "none");
	}
	let currentId = $($currentElement).attr('id');
	$('#'+currentId+'Section').removeClass('is-hidden');
});


$('.SecPro').on('click',function(event){
	let $currentElement=$(this);
	$('main > section').addClass('is-hidden'); 
	let currentId = $($currentElement).attr('id');
	$('#'+currentId+'ection').removeClass('is-hidden');
});



