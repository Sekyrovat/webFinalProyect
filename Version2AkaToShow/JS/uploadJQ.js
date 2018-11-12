let url1=new URL($(location).attr('href'));
let idProdtogetpic= url1.searchParams.get("id");
console.log(idProdtogetpic);
const url = '../data/applicationLayer.php';
const form = document.querySelector('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const files = document.querySelector('[type=file]').files;
//     const formData = new FormData();

//     for (let i = 0; i < files.length; i++) {
//         let file = files[i];

//         formData.append('files', file);
//     }

//    let jsonToSend ={
// 						"action": "ADD_PICTURE_TO_PRODUCT",
// 						"productId": idProdtogetpic,
// 						"formData": formData
// 				  	};

//     fetch(url, {
//         method: 'POST',
//         body: formData
//     }).then(response => {
//         console.log(response);
//     });
// });




						/*fetch("./data/applicationLayer.php", {
							method: 'POST',
							body: formData
						}).then(response => {
							console.log(response);
						});*/
						/*let jsonToSend ={
						"action": "ADD_PICTURE_TO_PRODUCT",
						"proyectId": idProdtogetpic,
						"formData": formData
				  	};

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
								console.log(data);
								//recibo ID proyecto
								location.reload();
							}
						},
						error : function(error){
							alert(error);
						}
					});
					});
				});*/