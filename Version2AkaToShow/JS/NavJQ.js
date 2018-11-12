$('.Sect').on('click',function(event){
	let $currentElement=$(this);
	console.log($currentElement.attr('id'));
	$('#ProjectsBedroomList').removeClass('is-hidden');
	$('#ProjectsLivingList').removeClass('is-hidden');
	$('#ProjectsKitchenList').removeClass('is-hidden');
	$('#ProjectsDinningList').removeClass('is-hidden');
	$('#ProjectsBathroomList').removeClass('is-hidden');
	$('#BeforeAfterBedroomList').removeClass('is-hidden');
	$('#BeforeAfterLivingList').removeClass('is-hidden');
	$('#BeforeAfterKitchenList').removeClass('is-hidden');
	$('#BeforeAfterDinningList').removeClass('is-hidden');
	$('#BeforeAfterBathroomList').removeClass('is-hidden');

	$('.divproj').removeClass('is-hidden');
	$('.divproj').addClass('is-hidden');
	
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



