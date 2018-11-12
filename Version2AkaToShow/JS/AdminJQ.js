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
					alert(error.status);
					console.log(error.statusText);
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
					alert(error.status);
					console.log(error.status);
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


/*BEFORE & AFTER*/

$('#buttonAddBeforeAfter').on("click", function(event){
	event.preventDefault();
	$('#notiBeforeAfter').removeClass('is-hidden');
});

$('#AcceptAddProjectBeforeAfter').on("click", function(event){
	event.preventDefault();
	let flagUser=true;

	if($('#ProjBeforeAfterName').val()!=""){
		$('#ProjBeforeAfterName').removeClass();
		$('#ProjBeforeAfterName').removeAttr("style");
		$('#ProjBeforeAfterName').addClass("input is-rounded ");
		$('#ProjBeforeAfterNameSpan').html(` `);

	}else{
		$('#ProjBeforeAfterName').addClass("is-danger");
		$('#ProjBeforeAfterName').css("background-color","#FF8977");
		$('#ProjBeforeAfterNameSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

if($('#ProjBeforeAfterDescription').val()!=""){
		$('#ProjBeforeAfterDescription').removeClass();
		$('#ProjBeforeAfterDescription').removeAttr("style");
		$('#ProjBeforeAfterDescription').addClass("input is-rounded ");
		$('#ProjBeforeAfterDescriptionSpan').html(` `);

	}else{
		$('#ProjBeforeAfterDescription').addClass("is-danger");
		$('#ProjBeforeAfterDescription').css("background-color","#FF8977");
		$('#ProjBeforeAfterDescriptionSpan').html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

if($('#AddProjectBeforeAfterCategory').val()!="0"){
		$('#AddProjectBeforeAfterCategory').removeClass();
		$('#AddProjectBeforeAfterCategory').removeAttr("style");
		$('#AddProjectBeforeAfterCategory').addClass("select is-rounded");
	}else{
		$('#AddProjectBeforeAfterCategory').addClass("is-danger");
		$('#AddProjectBeforeAfterCategory').css("background-color","#FF8977");
		flagUser=false;
	}

	if(flagUser){
		let jsonToSend ={
							"action"   	: "ADD_PROYECT_BEFORE_AFTER",
							"proyName" 	: $('#ProjBeforeAfterName').val(),
							"proyDesc" 	: $('#ProjBeforeAfterDescription').val(),
							"proyCategory":$('#AddProjectBeforeAfterCategory').val()
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
					alert(error.status);
					console.log(error.status);
				}
			});		
		}
});


$('#ProjBeforeAfterName').on("click", function(event){
	resetProjectBAName();
});

function resetProjectBAName(){
	let pName=$('#ProjBeforeAfterName');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProjBeforeAfterNameSpan').html(` `);
}

$('#AddProjectBeforeAfterDescription').on("click", function(event){
	resetProjectBADes();
});


function resetProjectBADes(){
	let pName=$('#ProjBeforeAfterDescription');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("input is-rounded ");
	pName.css("background-color","white");
	$('#ProjBeforeAfterDescriptionSpan').html(` `);
}

$('#deleteAddBeforeAfter').on("click", function(event){
	event.preventDefault();
	$('#notiBeforeAfter').addClass('is-hidden');
	resetProjectBAName();
	resetProjectBADes();
	resetProjectBACategory();
});

$('#AddProjectBeforeAfterCategory').on("click", function(event){
	resetProjectBACategory();
});

function resetProjectBACategory(){
	let pName=$('#AddProjectBeforeAfterCategory');
	pName.removeClass();
	pName.removeAttr("style");
	pName.addClass("select is-rounded ");
	pName.css("background-color","white");
}


$('#buttonLogOut').on("click", function(event){
	event.preventDefault();
	let jsonToSendLogout ={ "action"   : "LOGOUT" };

		$.ajax({
			url : "./data/applicationLayer.php",
			type : "POST",
			data : jsonToSendLogout,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					console.log("LOGOUT");
					window.location.href="./Index.php";
				}
			},
			error : function(error){
				alert(error.status);
				console.log(error.status);
			}
		});
});

$('#buttonSearch').on("click", function(event){
	event.preventDefault();
	console.log($('#TextSearch').val());
	if($('#TextSearch').val()!=""){
		let jsonToSendSearch ={ "action"   : "GET_SEARCH",
								 "itemName": $('#TextSearch').val()
							  };
		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSendSearch,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					console.log("search");
					$('main > section').addClass('is-hidden'); 
					$('#SearchSection').removeClass('is-hidden');
					let busqueda ="\""+ $('#TextSearch').val() +"\"";
					$('#Psearch').text(busqueda);
					let newHTMLSearch="";
					for(let i=0; i<data.response.length; ++i){
						newHTMLSearch += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="${data.response[i]['linkToPic']}">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s3">
									Category: ${data.response[i]['productCategory']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 							<button class="button is-rounded is-dark addPicProduct" id="${data.response[i]['productId']}">
	 							Add Picture</button>
	 						</li>`;
	 					}
	 				$('#SearchList').html(newHTMLSearch);
				}
			},
			error : function(error){
				alert(error.status);
				console.log(error.statusText);
			}
		});
	}
});
