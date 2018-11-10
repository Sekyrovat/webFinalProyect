<?php
	function connect()
	{
		$servername = "localhost";
	    $username = "root";
	    $password = "";
	    $dbname = "ostrikadb";
	    $connection = new mysqli($servername, $username, $password, $dbname);
	    if ($connection->connect_error) {
	    	return null;
	    }
	    else
	    {
	    	mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
			$connection->set_charset("utf8mb4");
	    	return $connection;
	    }
	}

	/**
	 * Attempt to login the user.
	 *
	 * @param String $userFiName
	 *  User's First name.
	 * @param String $userLaName
	 *  User's Last name.
	 * @param String $userEmail
	 *  User's email.
	 * @param String $userPwd
	 *  Password given by the user.
	 * @return Array status and code
	 * Status 				-> Code 
	 *  Ok, aka success		 -> 200
	 *  User not found.		 -> 406
	 *  Invalid combination. -> 409
	 *  Bad connection. 	 -> 500
	 */
	function attemptRegistration($userFiName, $userLaName, $userEmail, $userPwd)
	{
		$conn = connect();
		if ($conn) 
		{
			if (userEmail_exits($userEmail, $conn)) 
			{
			 	$conn -> close();
				return array('status' => "Email already registered", "code" => 409);
			}
			else
			{
				$query = "INSERT INTO account (fName, lName, Email, pwd)
				VALUES (?, ?, ?, ?)";
				$prepared_stmt = $conn->prepare($query);
				$newPass = password_hash($userPwd, PASSWORD_DEFAULT);
				$prepared_stmt->bind_param("ssss", $userFiName, $userLaName, $userEmail, $newPass);
			    if ($prepared_stmt->execute()) 
			    {
			        $conn -> close();
					return array('status' => "success", "code" => 200);
			    } 
			    else 
			    {
			    	$conn -> close();
					return array('status' => "Bad connection, something went wrong while saving your data, please try again later", "code" => 500);
			    }
			} 
		}
		else 
		{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	/**
	 * Attempt to login the user.
	 *
	 * @param String $userEmail
	 *  Email proposed by the user.
	 * @param String $pwd
	 *  Password given by the user.
	 *
	 * @return Array status and code
	 * Status 				-> Code 
	 *  Ok, aka success		 -> 200
	 *  User not found.		 -> 406
	 *  Invalid combination. -> 409
	 *  Bad connection. 	 -> 500
	 */
	function attemptLogin($userEmail, $pwd){
		$conn = connect();
		if ($conn){
			if (userEmail_exits($userEmail, $conn)){
				$conn -> close();
				return array('status' => "User not found", "code" => 406);
			} 
			else{
				$query = "SELECT id, pwd
						  FROM account 
						  WHERE Email = ?";
				$prepared_stmt = $conn -> prepare($query);
				$prepared_stmt -> bind_param( 's', $userEmail);
				if ($prepared_stmt -> execute()) {
					#$prepared_stmt -> store_result();
					$prepared_stmt ->bind_result($uId, $dbPass);
					$prepared_stmt -> fetch();
					$prepared_stmt -> close();
					$conn -> close();
					if (password_verify($pwd, $dbPass)) {
						return array('status' => 'success', 'code' => 200, 'response' => $uId);
					} else {
						return array('status' => 'Invalid user password combination', 'code' => 409);
					}
				} 
				else{
					$conn -> close();
					return array('status' => 'Invalid user password combination', 'code' => 409);
				}
			}
		}
		else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getProyectsByCategory($category){
		$conn = connect();
		if ($conn) {
			$query = "SELECT proyect.id, proyect.name, proyect.description
					  FROM proyect
					  WHERE proyect.category = ? AND proyect.isBeforeAfter = 0";

			$prepared_stmt = $conn -> prepare($query);
			$prepared_stmt = $conn -> bind_param( 's', $category);

			if ($prepared_stmt -> execute()) {
				$result = $prepared_stmt->get_result();
				# We declare here the array, since it will contain all the proeycts.
			    $arrOfProyects = array();
			    # Loop to get iterate through the result
			    while($row = mysqli_fetch_assoc($result)) {
			    	# We declare here the array of links since we want it to reset to empry on each iteration.
			    	$arrOfPicsOfProyect = array();
			    	# We get all the links to a particular proyect.
			    	$arrOfPicsOfProyect = getImagesOfCurrentProyect($row["proyect.id"]);
			    	# If the array didn't return a good value we return an error.
			    	if ($arrOfPicsOfProyect[0] !== 200) {
			    		return array('status' => 'Internal server error', 'code' => 500);
			    	}
			    	# Here we place all the values of the query and the array generated via the function.
			        $currentRow = array("proyectId" => $row["proyect.id"], "proyectName" => $row["proyect.name"], "proyectDescription" => $row["proyect.description"], "proyectCategory" => $category, "pics" => $arrOfPicsOfProyects);
			        # We push the row to the array of proyects.
			        array_push($arrOfProyects, $currentRow);
			    }
			    # We close the connection and return it as a response.
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProyects);
			} # In case the stmt was not executed.
			else{
				$conn -> close();
				return array('status' => 'Error no proyects in category', 'code' => 409);
			}
		}# Else in case the connection was not established.
		else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getProyectsByCategoryBeforeAfter($category){
		$conn = connect();
		if ($conn) {
			$query = "SELECT proyect.id, proyect.name, proyect.description
					  FROM proyect
					  WHERE proyect.category = ? AND proyect.isBeforeAfter = 1";

			$prepared_stmt = $conn -> prepare($query);
			$prepared_stmt = $conn -> bind_param( 's', $category);

			if ($prepared_stmt -> execute()) {
				$result = $prepared_stmt->get_result();
				# We declare here the array, since it will contain all the proeycts.
			    $arrOfProyects = array();
			    # Loop to get iterate through the result
			    while($row = mysqli_fetch_assoc($result)) {
			    	# We declare here the array of links since we want it to reset to empry on each iteration.
			    	$arrOfPicsOfProyect = array();
			    	# We get all the links to a particular proyect.
			    	$arrOfPicsOfProyect = getImagesOfCurrentProyect($row["proyect.id"]);
			    	# If the array didn't return a good value we return an error.
			    	if ($arrOfPicsOfProyect[0] !== 200) {
			    		return array('status' => 'Internal server error', 'code' => 500);
			    	}
			    	# Here we place all the values of the query and the array generated via the function.
			        $currentRow = array("proyectId" => $row["proyect.id"], "proyectName" => $row["proyect.name"], "proyectDescription" => $row["proyect.description"], "proyectCategory" => $category, "pics" => $arrOfPicsOfProyects);
			        # We push the row to the array of proyects.
			        array_push($arrOfProyects, $currentRow);
			    }
			    # We close the connection and return it as a response.
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProyects);
			} # In case the stmt was not executed.
			else{
				$conn -> close();
				return array('status' => 'Error no proyects in category', 'code' => 409);
			}
		}# Else in case the connection was not established.
		else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getImagesOfCurrentProyect($id){
		$NewCon = connect();
		if ($NewCon){
			$queryForPics = "SELECT pp.id, pp.type, pp.linkToPic
					  		 FROM picsofproyects as pp
							 WHERE pp.idproyect = ?";

			$picStmt = $NewCon -> prepare($queryForPics);
			$picStmt = $NewCon -> bind_param( 'i', $id);
			
			if ($picStmt -> execute()){
				$picsResult = $picStmt->get_result();
			    $arrOfLinks = array();

			    while($PicRow = mysqli_fetch_assoc($picsResult)){
			        $picsCurrentRow = array('picId' => $PicRow["pp.id"], 'picType' => $PicRow["pp.type"], 'picLink' => $PicRow["pp.linkToPic"]);
			        array_push($arrOfLinks, $picsCurrentRow);
			    }
			    return array(200, $arrOfLinks);
			}else{
				$NewCon -> close();
				return array('error');
			}
		}else{
			return array('error');
		}
	}


	function getProductsByCategory($category){
		$conn = connect();
		if ($conn){
			$prepared_stmt = $conn -> prepare("SELECT id, pName, pDescription, pPrice, pPicture FROM product WHERE category = '$category';");
			#$prepared_stmt = $conn -> bind_param( 's', $category);

			if ($prepared_stmt -> execute()){
				$result = $prepared_stmt->get_result();
			    $arrOfProducts = array();
			    while($row = mysqli_fetch_assoc($result)){
			        $currentRow = array("productId" => $row["id"], "productName" => $row["pName"], "productDescription" => $row["pDescription"], "productCategory" => $category, "productPrice" => $row["pPrice"], 'linkToPic' => $row["pPicture"]);
			        array_push($arrOfProducts, $currentRow);
			    }
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProducts);
			}else{
				$conn -> close();
				return array('status' => 'Invalid user password combination', 'code' => 409);
			}
		}else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function addProyect($name, $description, $category)
	{
		$conn = connect();
		if ($conn) 
		{
			$query = "INSERT INTO proyect ( name,  description, category ) 
            		  VALUES  ( ?, ?, ? )";
			$prepared_stmt = $conn -> prepare ( $query );
			$prepared_stmt -> bind_param ( 'sss' , $name, $description, $category );
			  
			if  ( $prepared_stmt -> execute() ) 
			{
				$getId = "SELECT MAX(id) as curId
						  FROM proyect;";
				$prepared_stmt_id = $conn -> prepare($getId);

				if ($prepared_stmt_id -> execute()) {
					$val = $prepared_stmt_id->get_result();
					$val = mysqli_fetch_assoc($val);
					$val = $val['curId'];

					$conn -> close();
					return array('status' => "success", "code" => 200, 'idOfProyect' => $val);
				} else {
					$conn -> close();
					return array('status' => 'Bad arguments', 'code' => 409);
				}
			} else {
				return array('status' => "Internal server error", "code" => 500);
			}
		}
	}

	function addProyectBeforeAfter($name, $description, $category)
	{
		$conn = connect();
		if ($conn) 
		{
			$query = "INSERT INTO proyect ( name,  description, category, isBeforeAfter ) 
            		  VALUES  ( ?, ?, ?, 1 )";
			$prepared_stmt = $conn -> prepare ( $query );
			$prepared_stmt -> bind_param ( 'sss' , $name, $description, $category);
			  
			if  ( $prepared_stmt -> execute() ) 
			{
				$getId = "SELECT MAX(id) as curId
						  FROM proyect;";
				$prepared_stmt_id = $conn -> prepare($getId);

				if ($prepared_stmt_id -> execute()) {
					$val = $prepared_stmt_id->get_result();
					$val = mysqli_fetch_assoc($val);
					$val = $val['curId'];
					$conn -> close();
					return array('status' => "success", "code" => 200, 'idOfProyect' => $val);
				} else {
					$conn -> close();
					return array('status' => 'Invalid user password combination', 'code' => 409);
				}
			} else {
				return array('status' => "Internal server error", "code" => 500);
			}
		}
	}

	function addPictureSingle($id){
		$conn = connect();
		if ($conn) 
		{
			$result = insertPic();
			if ($result[0] !== 200) {
				return array('status' => $result[1], 'code' => $result[0]);
			} else {
				$query = "INSERT INTO picsofproyects ( idproyect,  type, linkToPic ) 
	            		  VALUES  ( ?, 'Alone', ?)";
				$prepared_stmt = $conn -> prepare ( $query );
				$prepared_stmt -> bind_param ( 'is' , $id, $result[1]);
				  
				if  ( $prepared_stmt -> execute() ) 
				{
					$conn -> close();
					return array('status' => "success", "code" => 200);
				} else {
					return array('status' => "Internal server error", "code" => 500);
				}
			}
		}
	}

	function addPictureBeforeAfter($id, $type){
		$conn = connect();
		if ($conn) 
		{
			$result = insertPic();
			if ($result[0] !== 200) {
				return array('status' => $result[1], 'code' => $result[0]);
			} else {
				$query = "INSERT INTO picsofproyects ( idproyect,  type, linkToPic ) 
	            		  VALUES  ( ?, ?, ?)";
				$prepared_stmt = $conn -> prepare ( $query );
				$prepared_stmt -> bind_param ( 'is' , $id, $type, $result[1]);
				  
				if  ( $prepared_stmt -> execute() ) 
				{
					$conn -> close();
					return array('status' => "success", "code" => 200);
				} else {
					return array('status' => "Internal server error", "code" => 500);
				}
			}
		}else {
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function addProduct( $name, $description, $price, $category){
		$conn = connect();
		if ($conn) 
		{
			$query = "INSERT INTO product ( pName, pDescription, pPrice, category ) 
            		  VALUES  ( ?,?,?,?,?)";
			$prepared_stmt = $conn -> prepare ( $query );
			$prepared_stmt -> bind_param ( 'sssss' , $name, $description, $price, $category);
			
			if  ( $prepared_stmt -> execute() ) 
			{
				$conn -> close();
				return array('status' => "success", "code" => 200);
			} else {
				return array('status' => "Internal server error", "code" => 500);
			}
		}
		else {
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function addPictureProduct($id){
		$conn = connect();
		if ($conn) 
		{
			$result = insertPicForProd();
			if ($result[0] !== 200) {
				return array('status' => $result[1], 'code' => $result[0]);
			} else {
				$query = "INSERT INTO product ( linkToPic ) 
	            		  VALUES  ( ? )";
				$prepared_stmt = $conn -> prepare ( $query );
				$prepared_stmt -> bind_param ( 's' , $result[1]);
				  
				if  ( $prepared_stmt -> execute() ) 
				{
					$conn -> close();
					return array('status' => "success", "code" => 200);
				} else {
					return array('status' => "Internal server error", "code" => 500);
				}
			}
		}
	}

	function insertPicForProd(){
		$target_dir = "images/";
		$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image
		$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
		if($check !== false)
		{
			//echo "File is an image - " . $check["mime"] . ".";
			$uploadOk = 1;
		}
		else
		{
			$uploadOk = 0;
			return array(400, "File is not an image.");
		}
		
		// Check if file already exists
		if (file_exists($target_file)) {
		    $uploadOk = 0;
		    return array(400, "Sorry, file already exists.");
		}
		// Check file size
		if ($_FILES["fileToUpload"]["size"] > 500000) {
		    $uploadOk = 0;
		    return array(400, "Sorry, your file is too large.");
		}
		// Allow certain file formats
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
		&& $imageFileType != "gif" ) {
		    $uploadOk = 0;
		    return array(400, "Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		    return array(400, "Sorry, your file was not uploaded.");
		// if everything is ok, try to upload file
		} else {
		    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
		    	//return array(200, basename( $_FILES["fileToUpload"]["name"]))
		    	return array(200, $target_file . $imageFileType);
		    } else {
		        return array(406, "Sorry, there was an error uploading your file.");
		    }
		}
	}

	function insertPic(){
		$target_dir = "images/";
		$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image
		if(isset($_POST["submit"]))
		{
			$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
			if($check !== false)
			{
				//echo "File is an image - " . $check["mime"] . ".";
				$uploadOk = 1;
			}
			else
			{
				$uploadOk = 0;
				return array(400, "File is not an image.");
			}
		}
		// Check if file already exists
		if (file_exists($target_file)) {
		    $uploadOk = 0;
		    return array(400, "Sorry, file already exists.");
		}

		// Check file size
		if ($_FILES["fileToUpload"]["size"] > 500000) {
		    $uploadOk = 0;
		    return array(400, "Sorry, your file is too large.");
		}
		// Allow certain file formats
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
		&& $imageFileType != "gif" ) {
		    $uploadOk = 0;
		    return array(400, "Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		    return array(400, "Sorry, your file was not uploaded.");
		// if everything is ok, try to upload file
		} else {
		    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
		    	//return array(200, basename( $_FILES["fileToUpload"]["name"]))
		    	return array(200, $target_file . $imageFileType);
		    } else {
		        return array(406, "Sorry, there was an error uploading your file.");
		    }
		}
	}

	function addToCart($idc, $idp){
		$conn = connect();
		if ($conn) 
		{
			$query = "INSERT INTO shoppingcart ( idclient, idproduct ) 
            		  VALUES  ( ?,?)";
			$prepared_stmt = $conn -> prepare ( $query );
			$prepared_stmt -> bind_param ( 'ii' , $idc, $idp);
			
			if  ( $prepared_stmt -> execute() ) 
			{
				$conn -> close();
				return array('status' => "success", "code" => 200);
			} else {
				return array('status' => "Internal server error", "code" => 500);
			}
		}
		else {
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function removeFromCart($idc, $idp){
		$conn = connect();
		if ($conn) 
		{
			$query = "DELETE FROM shoppingcart
            		  WHERE  ( ?,?)";
			$prepared_stmt = $conn -> prepare ( $query );
			$prepared_stmt -> bind_param ( 'ii' , $idc, $idp);
			
			if  ( $prepared_stmt -> execute() ) 
			{
				$conn -> close();
				return array('status' => "success", "code" => 200);
			} else {
				return array('status' => "Internal server error", "code" => 500);
			}
		}
		else {
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getCartItems($idc)
	{
		$conn = connect();
		if ($conn){
			$query = "SELECT product.id, product.pName, product.pDescription, product.pPrice, product.pPicture
					  FROM product INNER JOIN shoppingcart ON product.productId = shoppingcart.idproduct
					  WHERE shoppingcart.idclient = ?;";

			$prepared_stmt = $conn -> prepare($query);
			$prepared_stmt = $conn -> bind_param( 's', $idc);
			if ($prepared_stmt -> execute()){
				$result = $prepared_stmt->get_result();
			    $arrOfProducts = array();
			    while($row = mysqli_fetch_assoc($result)){
			        $currentRow = array("productId" => $row["product.id"], "productName" => $row["product.pName"], "productDescription" => $row["product.pDescription"], "productPrice" => $row["product.pPrice"], "linkToPic" => $row["product.pPicture"]);
			        array_push($arrOfProducts, $currentRow);
			    }
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProducts);
			}else{
				$conn -> close();
				return array('status' => 'Invalid user password combination', 'code' => 409);
			}
		}else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getTotalFromCart($idc)
	{
		$conn = connect();
		if ($conn){
			$query = "SELECT SUM(product.pPrice) as productTotal
					  FROM product INNER JOIN shoppingcart ON product.productId = shoppingcart.idproduct
					  WHERE shoppingcart.idclient = ?;";

			$prepared_stmt = $conn -> prepare($query);
			$prepared_stmt = $conn -> bind_param( 's', $idc);
			if ($prepared_stmt -> execute()){
				$result = $prepared_stmt->get_result();
			    $arrOfProducts = array();
			    while($row = mysqli_fetch_assoc($result)){
			        $currentRow = array("total" => $row["productTotal"]);
			        array_push($arrOfProducts, $currentRow);
			    }
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProducts);
			}else{
				$conn -> close();
				return array('status' => 'Invalid user password combination', 'code' => 409);
			}
		}else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function getListOfItems($name)
	{
		$conn = connect();
		if ($conn){
			$query = "SELECT id, pName, pDescription, pPrice, pPicture FROM product
					  WHERE (`pName` LIKE '%".$name."%');";

			$prepared_stmt = $conn -> prepare($query);
			$prepared_stmt = $conn -> bind_param( 's', $name);
			if ($prepared_stmt -> execute()){
				$result = $prepared_stmt->get_result();
			    $arrOfProducts = array();
			    while($row = mysqli_fetch_assoc($result)){
			         $currentRow = array("productId" => $row["id"], "productName" => $row["pName"], "productDescription" => $row["pDescription"], "productCategory" => $category, "productPrice" => $row["pPrice"], 'linkToPic' => $row["pPicture"]);
			        array_push($arrOfProducts, $currentRow);
			    }
			    $conn -> close();
			    return array('status' => "success", "code" => 200, 'response' => $arrOfProducts);
			}else{
				$conn -> close();
				return array('status' => 'Invalid user password combination', 'code' => 409);
			}
		}else{
			return array('status' => "Internal server error", "code" => 500);
		}
	}

	function userEmail_exits($email, $conn)
	{
	    $prepared_stmtForEmailValidation = $conn->prepare('SELECT * FROM account WHERE Email = ?');
	    $prepared_stmtForEmailValidation -> bind_param("s", $email1);
	    $email1 = $email;

	    $prepared_stmtForEmailValidation -> execute();
	    $prepared_stmtForEmailValidation -> store_result();
	    
	    if ($prepared_stmtForEmailValidation -> num_rows() === 0) {
	        $prepared_stmtForEmailValidation -> close();
	        return true;
	    } else {
	        $prepared_stmtForEmailValidation -> close();
	        return false;
	    }
	}
?>