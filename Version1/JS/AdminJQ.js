$('#buttonAddProduct').css('margin-left','1%');
$('#buttonAddProj').css('margin-left','1%');

$('#notiFloor').css('margin','1% 15%');
$('#notiProj').css('margin','1% 15%');


$('#buttonAddProduct').on("click", function(event){
	event.preventDefault();
	$('#notiFloor').removeClass('is-hidden');
});


$('#ProdName').on("click", function(event){
	let pName=$('#ProdName');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProdNameSpan').html(` `);
});


$('#ProdName').on("click", function(event){
	resetProductName();
});

function resetProductName(){
	let pName=$('#ProdName');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProdNameSpan').html(` `);
}

$('#ProdDescription').on("click", function(event){
	resetProductDes();
});

function resetProductDes(){
	let pName=$('#ProdDescription');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProdDescriptionSpan').html(` `);
}

$('#ProdPrice').on("click", function(event){
	resetProductPrice();
});

function resetProductPrice(){
	let pName=$('#ProdPrice');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProdPriceSpan').html(` `);
}

$('#AddProductCategory').on("click", function(event){
	resetProductCategory();
});

function resetProductCategory(){
	let pName=$('#AddProductCategory');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("select is-rounded ");
	pName.css("background-color","white");
}



$('#AcceptAddProduct').on("click", function(event){
	event.preventDefault();
	let flagUser=true;

	if($('#ProdName').val()!=""){
		$('#ProdName').removeClass();
		$('#ProdName').removeAttr("style");
		$('#ProdName').addClass("input is-rounded ");
		$('#ProdNameSpan').html(` `);

	}else{
		$('#ProdName').addClass("is-danger");
		$('#ProdName').css("background-color","#FF8977");
		$('#ProdNameSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if($('#ProdDescription').val()!=""){
		$('#ProdDescription').removeClass();
		$('#ProdDescription').removeAttr("style");
		$('#ProdDescription').addClass("input is-rounded ");
		$('#ProdDescriptionSpan').html(` `);

	}else{
		$('#ProdDescription').addClass("is-danger");
		$('#ProdDescription').css("background-color","#FF8977");
		$('#ProdDescriptionSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if($('#ProdPrice').val()!=""){
		$('#ProdPrice').removeClass();
		$('#ProdPrice').removeAttr("style");
		$('#ProdPrice').addClass("input is-rounded ");
		$('#ProdPriceSpan').html(` `);

	}else{
		$('#ProdPrice').addClass("is-danger");
		$('#ProdPrice').css("background-color","#FF8977");
		$('#ProdPriceSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if($('#AddProductCategory').val()!="0"){
		$('#AddProductCategory').removeClass();
		$('#AddProductCategory').removeAttr("style");
		$('#AddProductCategory').addClass("select is-rounded");
	}else{
		$('#AddProductCategory').addClass("is-danger");
		$('#AddProductCategory').css("background-color","#FF8977");
		flagUser=false;
	}

	if(flagUser){
	let jsonToSend ={
						"action"   	: "ADD_PRODUCT",
						"prodName" 	: $('#ProdName').val(),
						"prodDesc" 	: $('#ProdDescription').val(),
						"prodPrice"	: $('#ProdPrice').val(),
						"prodCategory":$('#AddProductCategory').val()
				  };
	console.log(jsonToSend);
			$.ajax({
				url : "./data/applicationLayer.php",
				type : "POST",
				data : jsonToSend,
				ContentType : "application/json",
				dataType : "json",
				success : function(data){
					console.log(data);
					if(data.status=="success")
					{
						$('#notiFloor').addClass('is-hidden');
						location.reload();
					}
				},
				error : function(error){
					alert(error);
					console.log(error);
				}
			});	
		}	
});



$('#deleteProductFloors').on("click", function(event){
	event.preventDefault();
	$('#notiFloor').addClass('is-hidden');	
	resetProductName();
	resetProductDes();
	resetProductPrice();
	resetProductCategory();
});


/*PROJECTS*/

$('#buttonAddProj').on("click", function(event){
	event.preventDefault();
	$('#notiProj').removeClass('is-hidden');
});

$('#AcceptAddProject').on("click", function(event){
	event.preventDefault();
	let flagUser=true;

	if($('#ProjName').val()!=""){
		$('#ProjName').removeClass();
		$('#ProjName').removeAttr("style");
		$('#ProjName').addClass("input is-rounded ");
		$('#ProjNameSpan').html(` `);

	}else{
		$('#ProjName').addClass("is-danger");
		$('#ProjName').css("background-color","#FF8977");
		$('#ProjNameSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

if($('#ProjDescription').val()!=""){
		$('#ProjDescription').removeClass();
		$('#ProjDescription').removeAttr("style");
		$('#ProjDescription').addClass("input is-rounded ");
		$('#ProjDescriptionSpan').html(` `);

	}else{
		$('#ProjDescription').addClass("is-danger");
		$('#ProjDescription').css("background-color","#FF8977");
		$('#ProjDescriptionSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

if($('#AddProjectCategory').val()!="0"){
		$('#AddProjectCategory').removeClass();
		$('#AddProjectCategory').removeAttr("style");
		$('#AddProjectCategory').addClass("select is-rounded");
	}else{
		$('#AddProjectCategory').addClass("is-danger");
		$('#AddProjectCategory').css("background-color","#FF8977");
		flagUser=false;
	}

	if(flagUser){
		let jsonToSend ={
							"action"   	: "ADD_PROYECT",
							"proyName" 	: $('#ProjName').val(),
							"proyDesc" 	: $('#ProjDescription').val(),
							"proyCategory":$('#AddProjectCategory').val()
					  };
		console.log(jsonToSend);
			$.ajax({
				url : "./data/applicationLayer.php",
				type : "POST",
				data : jsonToSend,
				ContentType : "application/json",
				dataType : "json",
				success : function(data){
					console.log(data);
					if(data.status=="success")
					{
						$('#notiProj').addClass('is-hidden');
						location.reload();
					}
				},
				error : function(error){
					alert(error);
					console.log(error);
				}
			});		
		}
});

$('#ProjName').on("click", function(event){
	resetProjectName();
});

function resetProjectName(){
	let pName=$('#ProjName');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProjNameSpan').html(` `);
}

$('#ProjDescription').on("click", function(event){
	resetProjectDes();
});


function resetProjectDes(){
	let pName=$('#ProjDescription');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProjDescriptionSpan').html(` `);
}

$('#deleteAddProj').on("click", function(event){
	event.preventDefault();
	$('#notiProj').addClass('is-hidden');
	resetProjectName();
	resetProjectDes();
	resetProjectCategory();	
});

$('#AddProjectCategory').on("click", function(event){
	resetProjectCategory();
});

function resetProjectCategory(){
	let pName=$('#AddProjectCategory');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("select is-rounded ");
	pName.css("background-color","white");
}





//ADD_PROYECT 
/*let jsonToSend ={
						"action": "ADD_PROYECT",
						"proyName": _____,
						"proyDesc":_________,
						"proyCategory":_______
				  };

		$.ajax({
			url : "./data/AppLayer.php",
			type : "POST",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					//recibo ID proyecto
					window.location.href="./OtherHTML/Home.html";
				}
			},
			error : function(error){
				alert(error);
			}
		});	*/


//ADD PICS

/*let jsonToSend ={
						"action": "ADD_SOLO_PICTURES",
						"proyectId":_______
				  };

		$.ajax({
			url : "./data/AppLayer.php",
			type : "POST",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					//recibo ID proyecto
					window.location.href="./OtherHTML/Home.html";
				}
			},
			error : function(error){
				alert(error);
			}
		});	*/


//ADD_PROYECT B&A
/*let jsonToSend ={
						"action": "ADD_PROYECT_BEFORE_AFTER",
						"proyName": _____,
						"proyDesc":_________,
						"proyCategory":_______
				  };

		$.ajax({
			url : "./data/AppLayer.php",
			type : "POST",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					//reload
				}
			},
			error : function(error){
				alert(error);
			}
		});	*/


//ADD PICS

//Alone, befor, after en type
/*let jsonToSend ={
						"action": "ADD_BEFORE_AFTER_PICTURES",
						"proyectId":_______,
						"picType":________
				  };

		$.ajax({
			url : "./data/AppLayer.php",
			type : "POST",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					//reload
				}
			},
			error : function(error){
				alert(error);
			}
		});	*/



//ADD PRODUCTS 

/*let jsonToSend ={
						"action"   	: "ADD_PRODUCT",
						"prodName" 	: ,
						"prodDesc" 	: ,
						"prodPrice"	: ,
						"prodCategory":,
						"category" : ____

				  };

		$.ajax({
			url : "./data/AppLayer.php",
			type : "POST",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
	
				}
			},
			error : function(error){
				alert(error);
			}
		});	*/


//