$(document).ready(function () {
	checkCookie();
});

$('.hero.has-carousel').removeAttr("style");
$('.hero.has-carousel').css("position", "static");

if($('.selected').attr("id")=="Home"){
	$('body').css("overflow", "none");
}

var flagSign= false;
var flagLog=false;

$('#buttonSignUp').on("click", function(event){
	event.preventDefault();
	$('.selected').removeClass('selected');
	$('#HomeSection').addClass('selected');
	$('main > section').addClass('is-hidden'); 
	$('#HomeSection').removeClass('is-hidden');
	flagSign= true;
	flagLog=false;
});

$("#buttonLogIn").on("click", function(event){
	$('.selected').removeClass('selected');
	$('#HomeSection').addClass('selected');
	$('main > section').addClass('is-hidden'); 
	$('#HomeSection').removeClass('is-hidden');
	event.preventDefault();
	flagSign= false;
	flagLog=true;
});

$('.hero-carousel').click(function (event) {  
	if($('#registerSection').attr("class")=="is-hidden")
	{
		$('#loginSection').addClass("is-hidden");
	}
	if($('#loginSection').attr("class")=="is-hidden")
	{
		$('#registerSection').addClass("is-hidden");
	}
	removeErrorEmailLogIn();
	removeErrorPasswordLogIn();
});

$('.navbar').click(function (event) {  
	if(!flagSign && $('#registerSection').attr("class")=="is-hidden")
	{
		$('#loginSection').addClass("is-hidden");
	}
	if(!flagLog && $('#loginSection').attr("class")=="is-hidden")
	{
		$('#registerSection').addClass("is-hidden");
	}
	if(flagSign){
		showSignUp();	
	}
	if(flagLog){
		showLogIn();
	}
	flagSign= false;
	flagLog=false;
	removeErrorEmailLogIn();
	removeErrorPasswordLogIn();
});

function showSignUp(){
	removeErrorfNameSign();
	removeErrorlNameSign();
	removeErrorEmailSign();
	removeErrorPasswordSign();
	removeErrorPasswordConfirmSign();
	$('#loginSection').removeClass("is-hidden");
	$('#loginSection').addClass("is-hidden");
	$('#registerSection').removeClass("is-hidden");
}

function showLogIn(){
	removeErrorEmailLogIn();
	removeErrorPasswordLogIn();
	$('#registerSection').removeClass("is-hidden");
	$('#registerSection').addClass("is-hidden");
	$('#loginSection').removeClass("is-hidden");
}

$('#logButtonCancel').on("click", function(event){
	event.preventDefault();
	$('#logEmail').val("");
	$('#logPass').val("");
	removeErrorEmailLogIn();
	removeErrorPasswordLogIn();
});

$('#logEmail').on("click", function(event){
	removeErrorEmailLogIn();
});

$('#logPass').on("click", function(event){
	removeErrorPasswordLogIn();
});


function removeErrorEmailLogIn()
{
	let userEmail=$('#logEmail');
	let userEmailError=$('#LogEmailSpan');
	userEmail.removeClass();
	userEmail.removeAttr("style");
	userEmail.addClass("input is-rounded ");
	userEmail.css("background-color","white");
	userEmailError.html(` `);
}

function removeErrorPasswordLogIn()
{
	let userPassword=$('#logPass');
	let userPasswordError=$('#LogPassSpan');
	userPassword.removeClass();
	userPassword.removeAttr("style");
	userPassword.addClass("input is-rounded ");
	userPassword.css("background-color","white");
	userPasswordError.html(` `);
}

function validateEmail(sEmail) {
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

$('#logButtonOK').on("click", function(event){
	event.preventDefault();
	console.log("LOGIN");
	let userEmail=$('#logEmail');
	let userEmailError=$('#LogEmailSpan');
	let userPassword=$('#logPass');
	let userPasswordError=$('#LogPassSpan');
	let flagUser=false;
	let isEmail=false;

	isEmail=validateEmail(userEmail.val());

	if(userEmail.val()=="" || !isEmail){
		userEmail.addClass("is-danger");
		userEmail.css("background-color","#FF8977");
		userEmailError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}
	else{
		userEmail.removeClass();
		userEmail.removeAttr("style");
		userEmail.addClass("input is-rounded ");
		userEmailError.html(` `);
	}

	if(userPassword.val()==""){
		userPassword.addClass("is-danger");
		userPassword.css("background-color","#FF8977");
		userPasswordError.html(`<i class="fas fa-exclamation-triangle"></i>`);
	}
	if(userPassword.val()!="" && !flagUser){
		userPassword.removeClass();
		userPassword.addClass("input is-rounded ");
		userPasswordError.html(` `);

		let jsonToSend ={
						"action"   : "LOGIN",
						"userEmail": userEmail.val(),
						"userPwd" : userPassword.val(),
						};

		console.log(jsonToSend);

		$.ajax({
			url : "./data/applicationLayer.php",
			type : "GET",
			data : jsonToSend,
			ContentType : "application/json",
			dataType : "json",
			success : function(data){
				console.log(data);
				if(data.status=="success")
				{	
					if(data.response == 0){
						window.location.href="./IndexAdmin.php";
						console.log(data);
					}else{
						window.location.href="./IndexUser.php";						
					}
				}
			},
			error : function(error){
				console.log(error);
				alert(error);
			}
		});
	}
});


$('#SignButtonSignup').on("click", function(event){
	event.preventDefault();
	console.log("SIGNUP");

	let signfName=$('#SignfName');
	let signfNameError=$('#SignfNameSpan')
	let signlName=$('#SignlName');
	let signlNameError=$('#SignlNameSpan')
	let userEmail=$('#SignEmail');
	let userEmailError=$('#SignEmailSpan');
	let userPassword=$('#SignPass');
	let userPasswordError=$('#SignPassSpan');
	let regPassC=$('#SignPassC');
	let regPassCError=$('#SignPassCSpan');
	let flagUser=true;
	let isEmail=false;

	isEmail=validateEmail(userEmail.val());


	if(signfName.val()!=""){
		signfName.removeClass();
		signfName.addClass("input is-rounded ");
		signfNameError.html(` `);

	}else{
		signfName.addClass("is-danger");
		signfName.css("background-color","#FF8977");
		signfNameError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if(signlName.val()!=""){
		signlName.removeClass();
		signlName.addClass("input is-rounded ");
		signlNameError.html(` `);

	}else{
		signlName.addClass("is-danger");
		signlName.css("background-color","#FF8977");
		signlNameError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if(userEmail.val()=="" || !isEmail){
		userEmail.addClass("is-danger");
		userEmail.css("background-color","#FF8977");
		userEmailError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}else{
		userEmail.removeClass();
		userEmail.removeAttr("style");
		userEmail.addClass("input is-rounded ");
		userEmailError.html(` `);
	}

	if(userPassword.val()!=""){
		userPassword.removeClass();
		userPassword.addClass("input is-rounded ");
		userPasswordError.html(` `);

	}else{
		userPassword.addClass("is-danger");
		userPassword.css("background-color","#FF8977");
		userPasswordError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}

	if(regPassC.val()==""){
		regPassC.addClass("is-danger");
		regPassC.css("background-color","#FF8977");
		regPassCError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}else if(regPassC.val()==userPassword.val()){
		regPassCError.text("");
		regPassCError.html(`<i class="fas fa-check"></i>`);
	}else{
		regPassC.addClass("is-danger");
		regPassC.css("background-color","#FF4541");
		regPassCError.html(`<i class="fas fa-exclamation-triangle"></i>`);
		flagUser=false;
	}


	let jsonToSend ={
						"action" : "REGISTER",
						"userFiName" : signfName.val(),
						"userLaName" : signlName.val(),
						"userEmail" : userEmail.val(),
						"userPwd" : userPassword.val()
					};
	if(flagUser){
		$.ajax({
		url : "./data/applicationLayer.php",
		type : "POST",
		data : jsonToSend,
		ContentType : "application/json",
		dataType : "json",
		success : function(data){
			console.log(data);
			if(data==200){
				location.reload();
			}
			else{
				alert("ERROR in registration. Try later");
			}
		},
		error : function(error){
			console.log(error);
		}
		});
	}
});


function removeErrorfNameSign()
{
	let fName=$('#SignfName');
	fName.removeClass();
	fName.removeAttr("style");
	fName.addClass("input is-rounded ");
	fName.css("background-color","white");
	$('#SignfNameSpan').html(` `);
}

function removeErrorlNameSign()
{
	let lName=$('#SignlName');
	lName.removeClass();
	lName.removeAttr("style");
	lName.addClass("input is-rounded ");
	lName.css("background-color","white");
	$('#SignlNameSpan').html(` `);
}

function removeErrorEmailSign()
{
	let userEmail=$('#SignEmail');
	userEmail.removeClass();
	userEmail.removeAttr("style");
	userEmail.addClass("input is-rounded ");
	userEmail.css("background-color","white");
	$('#SignEmailSpan').html(` `);
}
 
function removeErrorPasswordSign()
{
	let userPassword=$('#SignPass');
	userPassword.removeClass();
	userPassword.removeAttr("style");
	userPassword.addClass("input is-rounded ");
	userPassword.css("background-color","white");
	$('#SignPassSpan').html(` `);
}
function removeErrorPasswordConfirmSign()
{
	let passcon=$('#SignPassC');
	passcon.removeClass();
	passcon.removeAttr("style");
	passcon.addClass("input is-rounded ");
	passcon.css("background-color","white");
	$('#SignPassCSpan').html(` `);
}

$('#SignButtonCancel').on("click", function(event){
	event.preventDefault();
	$('#SignfName').val("");
	$('#SignlName').val("");
	$('#SignEmail').val("");
	$('#SignPass').val("");
	$('#SignPassC').val("");
	removeErrorfNameSign();
	removeErrorlNameSign();
	removeErrorEmailSign();
	removeErrorPasswordSign();
	removeErrorPasswordConfirmSign();
});

$('#SignfName').on("click", function(event){
	removeErrorfNameSign();
});

$('#SignlName').on("click", function(event){
	removeErrorlNameSign();
});

$('#SignEmail').on("click", function(event){
	removeErrorEmailSign();
});

$('#SignPass').on("click", function(event){
	removeErrorPasswordSign();
});

$('#SignPassC').on("click", function(event){
	removeErrorPasswordConfirmSign();
});

$('#Frase').css("font-family", "Book Antiqua")


/*COOKIES*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$("#rememLogin").change(function() {
    if(this.checked) 
    {
        if ($('#logEmail').val() != "" && $('#logEmail').val() != null) 
        {
        	setCookie("email", $('#logEmail').val(), 30);
    	}
    }
    else
    {
    	setCookie("email", "", -1);
    }
});

function checkCookie() {
	let emailCookie = getCookie("email");
    if (emailCookie != "") {
        $("#logEmail").val(emailCookie);
    }
}

