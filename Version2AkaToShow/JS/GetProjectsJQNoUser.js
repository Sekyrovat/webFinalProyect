//Bedroom
let jsonToSendProjBedroomRequest ={
			"action"   : "GET_PROYECTS_CATEGORY",
			"category" : "Bedroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBedroomRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLbed="";
			let auxHTMLbed="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLbed += `<li class="s8" id="${data.response[i]['proyectId']}">
								<p class="s2">
									${data.response[i]['proyectName']}
								</p>`;
				console.log(data.response[i]['pics'][1][0]);
				if(data.response[i]['pics'][1][0]!=undefined){
            	newHTMLbed +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="${data.response[i]['pics'][1][0]['picLink']}">
         	 					</figure>`;
         	 	}else{
				newHTMLbed +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="https://bulma.io/images/placeholders/480x480.png">
         	 					</figure>`;
         	 	}				

	 			if(data.response[i]['pics'][1][0]!=undefined){
	 				newHTMLbed += `<br>
	 							<button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLbed += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLbed +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
							     <button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>

							      <p class="title is 2">${data.response[i]['proyectName']}</p>
							      <p class="s5">
									Description: ${data.response[i]['proyectDescription']} 
								</p>								      
	 								`;
				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					auxHTMLbed += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
				}
				auxHTMLbed += ` </div>`;
				}
			}
			$('#ProjectsBedroomList').html(newHTMLbed);
			$('#DIVProjectsBedroomID').html(auxHTMLbed);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsBedroomList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsBedroomList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});


//Living
let jsonToSendProjLivingRequest ={
			"action"   : "GET_PROYECTS_CATEGORY",
			"category" : "Living"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjLivingRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLliv="";
			let auxHTMLliv="";
						for(let i=0; i<data.response.length; ++i){
				newHTMLliv += `<li class="s8" id="${data.response[i]['proyectId']}">
								<p class="s2">
									${data.response[i]['proyectName']}
								</p>`;
				console.log(data.response[i]['pics'][1][0]);
				if(data.response[i]['pics'][1][0]!=undefined){
            	newHTMLliv +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="${data.response[i]['pics'][1][0]['picLink']}">
         	 					</figure>`;
         	 	}else{
				newHTMLliv +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="https://bulma.io/images/placeholders/480x480.png">
         	 					</figure>`;
         	 	}				
	 			if(data.response[i]['pics'][1][0]!=undefined){
	 				newHTMLliv += `<br><button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLliv += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLliv +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
   	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>

							      <p class="title is 2">${data.response[i]['proyectName']}</p>
							      <p class="s5">
									Description: ${data.response[i]['proyectDescription']} 
								</p>								      
	 								`;
				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					auxHTMLliv += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
				}
				auxHTMLliv += ` </div>`;
				}
			}
			$('#ProjectsLivingList').html(newHTMLliv);
			$('#DIVProjectsLivingID').html(auxHTMLliv);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsLivingList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsLivingList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});

//Kitchen
let jsonToSendProjKitchenRequest ={
			"action"   : "GET_PROYECTS_CATEGORY",
			"category" : "Kitchen"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjKitchenRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLkit="";
			let auxHTMLkit="";
						for(let i=0; i<data.response.length; ++i){
				newHTMLkit += `<li class="s8" id="${data.response[i]['proyectId']}">
								<p class="s2">
									${data.response[i]['proyectName']}
								</p>`;
				console.log(data.response[i]['pics'][1][0]);
				if(data.response[i]['pics'][1][0]!=undefined){
            	newHTMLkit +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="${data.response[i]['pics'][1][0]['picLink']}">
         	 					</figure>`;
         	 	}else{
				newHTMLkit +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="https://bulma.io/images/placeholders/480x480.png">
         	 					</figure>`;
         	 	}				
	 			if(data.response[i]['pics'][1][0]!=undefined){
	 				newHTMLkit += `<br><button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLkit += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLkit +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
							      <button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      <p class="title is 2">${data.response[i]['proyectName']}</p>
							      <p class="s5">
									Description: ${data.response[i]['proyectDescription']} 
								</p>								      
	 								`;
				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					auxHTMLkit += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
				}
				auxHTMLkit += ` </div>`;
				}
			}
			$('#ProjectsKitchenList').html(newHTMLkit);
			$('#DIVProjectsKitchenID').html(auxHTMLkit);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsKitchenList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsKitchenList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});

//Dinning
let jsonToSendProjDinningRequest ={
			"action"   : "GET_PROYECTS_CATEGORY",
			"category" : "Dinning"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjDinningRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLdin="";
			let auxHTMLdin="";
						for(let i=0; i<data.response.length; ++i){
				newHTMLdin += `<li class="s8" id="${data.response[i]['proyectId']}">
								<p class="s2">
									${data.response[i]['proyectName']}
								</p>`;
				console.log(data.response[i]['pics'][1][0]);
				if(data.response[i]['pics'][1][0]!=undefined){
            	newHTMLdin +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="${data.response[i]['pics'][1][0]['picLink']}">
         	 					</figure>`;
         	 	}else{
				newHTMLdin +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="https://bulma.io/images/placeholders/480x480.png">
         	 					</figure>`;
         	 	}				

	 			if(data.response[i]['pics'][1][0]!=undefined){
	 				newHTMLdin += `<br><button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLdin += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLdin +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      <p class="title is 2">${data.response[i]['proyectName']}</p>
							      <p class="s5">
									Description: ${data.response[i]['proyectDescription']} 
								</p>								      
	 								`;
				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					auxHTMLdin += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
				}
				auxHTMLdin += ` </div>`;
				}
			}
			$('#ProjectsDinningList').html(newHTMLdin);
			$('#DIVProjectsDinningID').html(auxHTMLdin);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsDinningList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsDinningList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});

//Bathroom
let jsonToSendProjBathroomRequest ={
			"action"   : "GET_PROYECTS_CATEGORY",
			"category" : "Bathroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBathroomRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLbat="";
			let auxHTMLbat="";
			for(let i=0; i<data.response.length; ++i){
				newHTMLbat += `<li class="s8" id="${data.response[i]['proyectId']}">
								<p class="s2">
									${data.response[i]['proyectName']}
								</p>`;
				console.log(data.response[i]['pics'][1][0]);
				if(data.response[i]['pics'][1][0]!=undefined){
            	newHTMLbat +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="${data.response[i]['pics'][1][0]['picLink']}">
         	 					</figure>`;
         	 	}else{
				newHTMLbat +=	`<figure class="image is-4by3">
            					<img id="pic${data.response[i]['proyectId']}" src="https://bulma.io/images/placeholders/480x480.png">
         	 					</figure>`;
         	 	}				
	 			if(data.response[i]['pics'][1][0]!=undefined){
	 				newHTMLbat += `<br><button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLbat += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLbat +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      <p class="title is 2">${data.response[i]['proyectName']}</p>
							      <p class="s5">
									Description: ${data.response[i]['proyectDescription']} 
								</p>								      
	 								`;
				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					auxHTMLbat += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
				}
				auxHTMLbat += ` </div>`;
				}
			}
			$('#ProjectsBathroomList').html(newHTMLbat);
			$('#DIVProjectsBathroomID').html(auxHTMLbat);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsBathroomList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#ProjectsBathroomList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});