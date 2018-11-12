//Bedroom
let jsonToSendProjBeforeAfterBedroomRequest ={
			"action"   : "GET_PROYECTS_CATEGORY_BEFORE_AFTER",
			"category" : "Bedroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBeforeAfterBedroomRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLbed="";
			let auxHTMLbed="";
			let beforeHTMLbed="";
			let afterHTMLbed="";
			for(let i=0; i<data.response.length; ++i){
				beforeHTMLbed="";
				afterHTMLbed="";
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
	 				newHTMLbed += `<br><button class="button is-rounded is-$light OpenProject" name="${data.response[i]['proyectId']}">
	 							Open Project</button>`;
	 			}
	 				newHTMLbed += `</li>`;

	 	 		if(data.response[i]['pics'][1][0]!=undefined){
	 			auxHTMLbed +=	`<div class="is-hidden divproj" id="ProjPics${data.response[i]['proyectId']}">
							      	<div id="infoProj${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      		<p class="title is 2">${data.response[i]['proyectName']}</p>
							      		<p class="s5">
												Description: ${data.response[i]['proyectDescription']} 
										</p>								      
	 								</div>`;
	 			beforeHTMLbed +=`<div class="s6" id="before${data.response[i]['proyectId']}">
					   			 <p class="title is 2 has-text-grey	">Before</p>`;
	 			afterHTMLbed  +=`<div class="s6" id="after${data.response[i]['proyectId']}">
	 							<p class="title is 2 has-text-grey	">After</p>`;

				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					if(data.response[i]['pics'][1][j]['picType']=="Befor"){
						beforeHTMLbed += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}else if(data.response[i]['pics'][1][j]['picType']=="After"){
						afterHTMLbed += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}	
				}
				beforeHTMLbed += ` </div>`;
				afterHTMLbed += ` </div>`;
				auxHTMLbed += beforeHTMLbed + afterHTMLbed +` </div>`;
				}
			}
			$('#BeforeAfterBedroomList').html(newHTMLbed);
			$('#DIVProjectsBeforeBedroomID').html(auxHTMLbed);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterBedroomList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterBedroomList').removeClass('is-hidden');
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
let jsonToSendProjBeforeAfterLivingRequest ={
			"action"   : "GET_PROYECTS_CATEGORY_BEFORE_AFTER",
			"category" : "Living"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBeforeAfterLivingRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLliv="";
			let auxHTMLliv="";
			let beforeHTMLliv="";
			let afterHTMLliv="";
			for(let i=0; i<data.response.length; ++i){
				beforeHTMLliv="";
				afterHTMLliv="";
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
							      	<div id="infoProj${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      		<p class="title is 2">${data.response[i]['proyectName']}</p>
							      		<p class="s5">
												Description: ${data.response[i]['proyectDescription']} 
										</p>								      
	 								</div>`;
	 			beforeHTMLliv +=`<div class="s6" id="before${data.response[i]['proyectId']}">
					   			 <p class="title is 2 has-text-grey	">Before</p>`;
	 			afterHTMLliv  +=`<div class="s6" id="after${data.response[i]['proyectId']}">
	 							<p class="title is 2 has-text-grey	">After</p>`;

				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					if(data.response[i]['pics'][1][j]['picType']=="Befor"){
						beforeHTMLliv += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}else if(data.response[i]['pics'][1][j]['picType']=="After"){
						afterHTMLliv += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}	
				}
				beforeHTMLliv += ` </div>`;
				afterHTMLliv += ` </div>`;
				auxHTMLliv += beforeHTMLliv + afterHTMLliv +` </div>`;
				}
			}
			$('#BeforeAfterLivingList').html(newHTMLliv);
			$('#DIVProjectsBeforeLivingID').html(auxHTMLliv);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterLivingList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterLivingList').removeClass('is-hidden');
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
let jsonToSendProjBeforeAfterKitchenRequest ={
			"action"   : "GET_PROYECTS_CATEGORY_BEFORE_AFTER",
			"category" : "Kitchen"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBeforeAfterKitchenRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLkit="";
			let auxHTMLkit="";
			let beforeHTMLkit="";
			let afterHTMLkit="";
			for(let i=0; i<data.response.length; ++i){
				beforeHTMLkit="";
				afterHTMLkit="";
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
							      	<div id="infoProj${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      		<p class="title is 2">${data.response[i]['proyectName']}</p>
							      		<p class="s5">
												Description: ${data.response[i]['proyectDescription']} 
										</p>								      
	 								</div>`;
	 			beforeHTMLkit +=`<div class="s6" id="before${data.response[i]['proyectId']}">
					   			 <p class="title is 2 has-text-grey	">Before</p>`;
	 			afterHTMLkit  +=`<div class="s6" id="after${data.response[i]['proyectId']}">
	 							<p class="title is 2 has-text-grey	">After</p>`;

				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					if(data.response[i]['pics'][1][j]['picType']=="Befor"){
						beforeHTMLkit += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}else if(data.response[i]['pics'][1][j]['picType']=="After"){
						afterHTMLkit += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}	
				}
				beforeHTMLkit += ` </div>`;
				afterHTMLkit += ` </div>`;
				auxHTMLkit += beforeHTMLkit + afterHTMLkit +` </div>`;
				}
			}
			$('#BeforeAfterKitchenList').html(newHTMLkit);
			$('#DIVProjectsBeforeKitchenID').html(auxHTMLkit);


			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterKitchenList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterKitchenList').removeClass('is-hidden');
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
let jsonToSendProjBeforeAfterDinningRequest ={
			"action"   : "GET_PROYECTS_CATEGORY_BEFORE_AFTER",
			"category" : "Dinning"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBeforeAfterDinningRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLdin="";
			let auxHTMLdin="";
			let beforeHTMLdin="";
			let afterHTMLdin="";
			for(let i=0; i<data.response.length; ++i){
				beforeHTMLdin="";
				afterHTMLdin="";
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
							      	<div id="infoProj${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      		<p class="title is 2">${data.response[i]['proyectName']}</p>
							      		<p class="s5">
												Description: ${data.response[i]['proyectDescription']} 
										</p>								      
	 								</div>`;
	 			beforeHTMLdin +=`<div class="s6" id="before${data.response[i]['proyectId']}">
					   			 <p class="title is 2 has-text-grey	">Before</p>`;
	 			afterHTMLdin  +=`<div class="s6" id="after${data.response[i]['proyectId']}">
	 							<p class="title is 2 has-text-grey	">After</p>`;

				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					if(data.response[i]['pics'][1][j]['picType']=="Befor"){
						beforeHTMLdin += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}else if(data.response[i]['pics'][1][j]['picType']=="After"){
						afterHTMLdin += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}	
				}
				beforeHTMLdin += ` </div>`;
				afterHTMLdin += ` </div>`;
				auxHTMLdin += beforeHTMLdin + afterHTMLdin +` </div>`;
				}
			}
			$('#BeforeAfterDinningList').html(newHTMLdin);
			$('#DIVProjectsBeforeDinningID').html(auxHTMLdin);


			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterDinningList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterDinningList').removeClass('is-hidden');
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
let jsonToSendProjBeforeAfterBathroomRequest ={
			"action"   : "GET_PROYECTS_CATEGORY_BEFORE_AFTER",
			"category" : "Bathroom"
		  };

$.ajax({
	url : "./data/applicationLayer.php",
	type : "GET",
	data : jsonToSendProjBeforeAfterBathroomRequest,
	ContentType : "application/json",
	dataType : "json",
	success : function(data){
		console.log(data);
		if(data.status=="success")
		{	
			let newHTMLbat="";
			let auxHTMLbat="";
			let beforeHTMLbat="";
			let afterHTMLbat="";
			for(let i=0; i<data.response.length; ++i){
				beforeHTMLbat="";
				afterHTMLbat="";
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
							      	<div id="infoProj${data.response[i]['proyectId']}">
	 								<button class="delete is-hidden" id="closeProj${data.response[i]['proyectId']}" name="${data.response[i]['proyectId']}"></button>
							      		<p class="title is 2">${data.response[i]['proyectName']}</p>
							      		<p class="s5">
												Description: ${data.response[i]['proyectDescription']} 
										</p>								      
	 								</div>`;
	 			beforeHTMLbat +=`<div class="s6" id="before${data.response[i]['proyectId']}">
					   			 <p class="title is 2 has-text-grey	">Before</p>`;
	 			afterHTMLbat  +=`<div class="s6" id="after${data.response[i]['proyectId']}">
	 							<p class="title is 2 has-text-grey	">After</p>`;

				for(let j=0; j<data.response[i]['pics'][1].length; ++j){
					if(data.response[i]['pics'][1][j]['picType']=="Befor"){
						beforeHTMLbat += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}else if(data.response[i]['pics'][1][j]['picType']=="After"){
						afterHTMLbat += `<div class="s7">
								   <figue class="image is-4by3">
      								<img src="${data.response[i]['pics'][1][j]['picLink']}" width="640" height="310" />
								   <figure>
								   </div>`;
					}	
				}
				beforeHTMLbat += ` </div>`;
				afterHTMLbat += ` </div>`;
				auxHTMLbat += beforeHTMLbat + afterHTMLbat +` </div>`;
				}
			}
			$('#BeforeAfterBathroomList').html(newHTMLbat);
			$('#DIVProjectsBeforeBathroomID').html(auxHTMLbat);

			$('.OpenProject').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterBathroomList').addClass('is-hidden');
				$('#ProjPics'+idProjPic).removeClass('is-hidden');
				$('#closeProj'+idProjPic).removeClass('is-hidden');
			});

			$('.delete').on("click", function(event){
				event.preventDefault();
				let idProjPic=$(this).attr('name');
				console.log(idProjPic);
				$('#BeforeAfterBathroomList').removeClass('is-hidden');
				$('#ProjPics'+idProjPic).addClass('is-hidden');
				$('#closeProj'+idProjPic).addClass('is-hidden');
			});
		}
	},
		error : function(error){
		console.log(error);
	}
});



