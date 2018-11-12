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
			console.log("HERE");

			let newHTMLFloor="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLFloor += `<li class="s1" id="${data.response[i]['productId']}">
								<p class="s2">
									${data.response[i]['productName']}
								</p>
								<figure class="image is-4by3">
            						<img id="pic${data.response[i]['productId']}" src="https://www.kingofmaids.com/blog/wp-content/uploads/2016/10/Carlisle-Versallia-Luxury-Vinyl-Plank-Flooring-Chesapeake-Room-3559_1082_617_80_c1-772x394.jpg">
         	 					</figure>
								<p class="s3">
									Description: ${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									Precio: $ ${data.response[i]['productPrice']} MXN.										
	 							</p>
	 							<button class="button is-rounded is-dark addPicProduct" id="${data.response[i]['productId']}">
	 							Add Picture</button>
	 						</li>`;
			}
			$('#ProductsFloorsList').html(newHTMLFloor);

			$('.addPicProduct').on("click", function(event){
				event.preventDefault();
				let idProdtogetpic=$(this).attr('id');
				console.log(idProdtogetpic);
				var url=idProdtogetpic;
				var uri_enc = encodeURIComponent(url);
				var url2= "html/uploadProduct.html?id="+ uri_enc;
				console.log(url2);
   	 			window.location.href=url2;
			});
		}
	},

		error : function(error){
		console.log(error);
	}
});




/*let jsonToSendProductsVeneerRequest ={
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

		}
	},
	error : function(error){
		alert(error);
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

		}
	},
	error : function(error){
		alert(error);
	}
});	

let jsonToSendProductsBathroomRequest ={
			"action"   : "GET_PRODUCTS_CATEGORY",
			"category" : "Bathroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProductsBathroomRequest,
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
});*/