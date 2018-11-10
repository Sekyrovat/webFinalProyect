<?php
	# It will respond to every request.
	header('Content-type: application/json');
	header('Accept: application/json');
	# This specifies that every service will recieve and send a json.
	
	# Here is where we would point to another server if we had more than 1.
	require_once __DIR__ . '/dataLayer.php';
	$requestMethod = $_SERVER['REQUEST_METHOD'];
	# The switch is generic. Since it only targets general actions. We need
	# to be more specific with what we want to do. To manage this we use
	# extra functions that will have more specific switches.
	switch ($requestMethod) 
	{
		case 'GET':
			$action = $_GET["action"];
			getRequests($action);
			break;
		case 'POST':
			$action = $_POST['action'];
			postRequests($action);
			break;
		case 'PUT':
			$_PUT = file_get_contents('php://input');
			$action = $_PUT['action'];
			putRequests($action);
			break;
	}
	function getRequests($action)
	{
		switch ($action) {
			case 'LOGIN':
				# Here we call the login from the data layer.
				requestLogin();
				break;
			case 'GET_PROYECTS_CATEGORY':
				requestProyectsByCategory();
				break;
			case 'GET_PROYECTS_CATEGORY_BEFORE_AFTER':
				requestProyectsByCategoryBeforeAfter();
				break;
			case 'GET_PRODUCTS_CATEGORY':
				requestProductsByCategory();
				break;
			case 'GET_CURRENT_CART':
				requestCurrentCartItems();
				break;
			case 'GET_TOTAL':
				requestTotalFromCart();
				break;
		}
	}
	#function putRequests($action)
		#{
		#	switch ($action) {
		#		case 'CONFIRM_FRIEND':
		#			# Here we call the login from the data layer.
		#			confirmFriendship();
		#			break;
		#	}
	#}

	function postRequests($action)
	{
		switch ($action) {
			case 'REGISTER':
				requestRegister();
				break;
			case 'ADD_PROYECT':
				submitNewProyect();
				break;
			case 'ADD_PROYECT_BEFORE_AFTER':
				submitNewProyectBeforeAfter();
				break;
			case 'ADD_SOLO_PICTURES':
				addNewSoloPics();
				break;
			case 'ADD_BEFORE_AFTER_PICTURES':
				addNewBeforeAfterPics();
				break;
			case 'ADD_PRODUCT':
				addNewProduct();
				break;
			case 'ADD_PRODUCT_TO_CART':
				requestAddToCart();
				break;
			case 'REMOVE_PRODUCT_FROM_CART':
				requestRemoveFromCart();
				break;
			case 'LOGOUT':
				attemptLogout();
				break;
		}
	}

	####################################################
	####################################################
	####################################################
	# Functions for registering, logging in and out
	function requestRegister()
	{
		$userFiName = $_POST['userFiName'];
		$userLaName = $_POST['userLaName'];
		$userEmail = $_POST['userEmail'];
		$userPwd = $_POST['userPwd'];
		$response = attemptRegistration($userFiName, $userLaName, $userEmail, $userPwd);
		if ($response['status'] === "success") {
			echo json_encode($response['code']);
		} else {
			errorHandler($response["status"], $response["code"]);
		}
	}
	function requestLogin()
	{
		$uEmail = $_GET['userEmail'];
		$pwd = $_GET['userPwd'];
		$response = attemptLogin($uEmail, $pwd);
		if ($response['status'] === "success") {
			session_start();
			$_SESSION['userId'] = $response['response'];
			echo json_encode(array( 'status' => $response['status'], 'code' => $response['code']));
		} else {
			errorHandler(array($response["status"], $response["code"]));
		}
	}
	/**
	 * Logout the currently logged in user.
	 * Destroys and unsets the session.
	 */
	function attemptLogout()
	{
		session_start();
		if (isset($_SESSION['userId']) && !empty($_SESSION['userId'])) 
		{
			session_unset();
			session_destroy();
			echo json_encode(array( 'status' => 'success', 'code' => 200));
		}	
	}
	####################################################
	####################################################
	####################################################


	####################################################
	####################################################
	####################################################
	# Related to adding new proyects
	function submitNewProyect()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION['userId'];
			if  ($uId = 0) {
				$name = $_POST["proyName"];
				$description = $_POST["proyDesc"];
				$category = $_POST["proyCategory"];
				$response = addProyect($name, $description, $category);
			} else {
			    errorHandler("Invalid activity", 409);
			}
			
			if ($response['status'] === "success"){
				echo json_encode(array('status' => 'success', 'code' => 200 , 'idOfProyect' => $response['idOfProyect']));
			} else {
				errorHandler($response["status"], $response["code"]);
			}
		}else{
			errorHandler('User not logged in', 406);
		}
	}

	function addNewSoloPics()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION['userId'];
			if  ($uId = 0) {
				$proyId = $_POST["proyectId"];
				$response = addPictureSingle($proyId);
			} else {
			    errorHandler("Invalid activity", 409);
			}
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}
	####################################################
	####################################################
	####################################################




	####################################################
	####################################################
	####################################################
	# Related to adding new before and after proyects
	function submitNewProyectBeforeAfter()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION['userId'];
			if  ($uId = 0) {
				$name = $_POST["proyName"];
				$description = $_POST["proyDesc"];
				$category = $_POST["proyCategory"];
				$response = addProyectBeforeAfter($name, $description, $category);
			} else {
			    errorHandler("Invalid activity", 409);
			}
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200 , 'idOfProyect' => $response['idOfProyect']));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}
	function addNewBeforeAfterPics()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION['userId'];
			if  ($uId = 0) {
				$proyId = $_POST["proyectId"];
				$type = $_POST["picType"];
				$response = addPictureBeforeAfter($proyId, $type);
			} else {
			    errorHandler("Invalid activity", 409);
			}
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}
	####################################################
	####################################################
	####################################################



	####################################################
	####################################################
	####################################################
	# Related to requesting proyects and products to display
	function requestProyectsByCategory()
	{
		session_start();
		if(verifySession())
		{
			$category = $_GET['category'];
			$response = getProyectsByCategory($category);
			if ($response['status'] === "success") {
				echo json_encode(array('status' => 'success', 'code' => 200 , 'response' => $response['response']));
			} else {
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}

	function requestProyectsByCategoryBeforeAfter()
	{
		session_start();
		if(verifySession())
		{
			$category = $_GET['category'];
			$response = getProyectsByCategoryBeforeAfter($category);
			if ($response['status'] === "success") {
				echo json_encode(array('status' => 'success', 'code' => 200 , 'response' => $response['response']));
			} else {
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}

	function requestProductsByCategory()
	{
		session_start();
		if(verifySession())
		{
			$category = $_GET['category'];
			$response = getProductsByCategory($category);
			if ($response['status'] === "success") {
				echo json_encode(array('status' => 'success', 'code' => 200 , 'response' => $response['response']));
			} else {
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}
	####################################################
	####################################################
	####################################################



	####################################################
	####################################################
	####################################################
	# Related to adding new products

	function addNewProduct()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION['userId'];
			if  ($uId = 0) {
				$name = $_POST["prodName"];
				$description = $_POST["prodDesc"];
				$price = $_POST["prodPrice"];
				$category = $_POST["prodCategory"];
				$response = addProduct($name, $description, $price, $category);
			} else {
			    errorHandler("Invalid activity", 409);
			}
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}


	####################################################
	####################################################
	####################################################




	####################################################
	####################################################
	####################################################
	# Related to the shopping cart

	function requestAddToCart()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION["$userId"];
			$product = $_POST["prodId"];
			$response = addToCart($uId, $product);
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}


	function requestRemoveFromCart()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION["$userId"];
			$product = $_POST["prodId"];
			$response = removeFromCart($uId, $product);
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}

	function requestCurrentCartItems()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION["$userId"];
			$response = getCartItems($uId);
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200, 'response' => $response["response"]));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}

	function requestTotalFromCart()
	{
		session_start();
		if(verifySession())
		{
			$uId = $_SESSION["$userId"];
			$response = getTotalFromCart($uId);
			
			if ($response['status'] === "success") 
			{
				echo json_encode(array('status' => 'success', 'code' => 200, 'response' => $response["response"]));
			} 
			else 
			{
				errorHandler($response["status"], $response["code"]);
			}
		}
		else
		{
			errorHandler('User not logged in', 406);
		}
	}

	####################################################
	####################################################
	####################################################


	function verifySession()
	{
		if(empty($_SESSION['userId']) || !isset($_SESSION['userId']) || $_SESSION['userId'] === 'undefined')
		{
		    return false;
		}
		return true;
	}
	
	function errorHandler($status, $code)
	{
		header("HTTP/1.1 $code $status.");
		die("Error detected.");
	}
?>