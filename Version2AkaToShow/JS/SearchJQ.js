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