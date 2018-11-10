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
								<p class="s3">
									${data.response[i]['productDescription']} 
								</p>
								<p class="s4">
									${data.response[i]['productPrice']}										
	 							</p>
	 							<button class="button is-rounded is-dark addPicProduct" id="${data.response[i]['productId']}">
	 							Add Picture</button>
	 							<div id="div${data.response[i]['productId']}" class="is-hidden">
	 								Select image to upload:
   	 								<input type="file" name="fileToUpload" id="fileToUpload">
    								<input type="submit" value="Upload Image" name="submit">
	 							</div>
	 						</li>`;
			}
			$('#ProductsFloorsList').html(newHTMLFloor);

			$('.addPicProduct').on("click", function(event){
				event.preventDefault();
				console.log($(this).attr('id'));
				$('#div'+$(this).attr('id')).removeClass('is-hidden');
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