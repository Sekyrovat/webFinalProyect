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


$('#buttonCart').on("click", function(event){
	event.preventDefault();
	let jsonToSendCurrentCart ={"action"   	: "GET_CURRENT_CART"};

		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSendCurrentCart,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{
					$('main > section').addClass('is-hidden'); 
					$('#CartSection').removeClass('is-hidden');
					let newHTMLCurrentCart="";
					for(let i=0; i<data.response.length; ++i){
						newHTMLCurrentCart += `<li class="s1" id="${data.response[i]['productId']}">
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
	 							<button class="button is-rounded is-dark addRemoveToCart" id="${data.response[i]['productId']}">
	 							Remove</button>
	 						</li>`;
			}
			
			let jsonToSendTotalCart ={	"action"   	: "GET_TOTAL" };

					$.ajax({
						url : "./data/applicationLayer.php",
						type : "GET",
						data : jsonToSendTotalCart,
						ContentType : "application/json",
						dataType : "json",
						success : function(data){
							console.log(data);
							if(data.status=="success")
							{
								console.log("Total");
								console.log(data.response);
								$('#TotalCart').text(data.response[0]['total']);

							}
						},
						error : function(error){
							alert(error);
							console.log("fdghjkldfghjklfghjkfghjkfghj");
							console.log(error);
						}
					});	

			$('#CartList').html(newHTMLCurrentCart);

			$('.addRemoveToCart').on("click", function(event){
				event.preventDefault();
				console.log("remove");
				let idP=$(this).attr('id');	
				let jsonToSendRemoveCart ={
						"action"   	: "REMOVE_PRODUCT_FROM_CART",
						"prodId" : idP
				  };

				$.ajax({
					url : "./data/applicationLayer.php",
					type : "POST",
					data : jsonToSendRemoveCart,
					ContentType : "application/json",
					dataType : "json",
					success : function(data){
						console.log(data);
						if(data.status=="success")
						{
							alert("Product removed");
							location.reload();
						}
					},
					error : function(error){
						alert(error);
						console.log(error);
					}
				});	
			});
			}
		},
			error : function(error){
				alert(error);
				console.log(error);
		}
	});	
});


