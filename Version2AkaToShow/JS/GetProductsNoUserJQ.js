let jsonToSendProductsFloorRequest ={
			"action"   : "GET_PRODUCTS_CATEGORY",
			"category" : "Floor"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProductsFloorRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLFloor="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLFloor += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="${data.response[i]['linkToPic']}">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 						</li>`;
			}
			
			$('#ProductsFloorsList').html(newHTMLFloor);
		}
	},
		error : function(error){
		console.log(error);
	}
});


let jsonToSendProductsVeneerRequest ={
			"action"   : "GET_PRODUCTS_CATEGORY",
			"category" : "Veneer"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProductsVeneerRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLVeneer="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLVeneer += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="${data.response[i]['linkToPic']}">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 						</li>`;
			}
			$('#ProductsVeneerList').html(newHTMLVeneer);

		}
	},
		error : function(error){
		console.log(error);
	}
});



let jsonToSendProductsBathRequest ={
			"action"   : "GET_PRODUCTS_CATEGORY",
			"category" : "Bathroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProductsBathRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLBath="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLBath += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="${data.response[i]['linkToPic']}">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 						</li>`;
			}
			$('#ProductsBathList').html(newHTMLBath);

		}
	},
		error : function(error){
		console.log(error);
	}
});

let jsonToSendProductsMosaicsRequest ={
			"action"   : "GET_PRODUCTS_CATEGORY",
			"category" : "Mosaics"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProductsMosaicsRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLMosaics="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLMosaics += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="${data.response[i]['linkToPic']}">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 						</li>`;
			}
			$('#ProductsMosaicsList').html(newHTMLMosaics);

		}
	},
		error : function(error){
		console.log(error);
	}
});