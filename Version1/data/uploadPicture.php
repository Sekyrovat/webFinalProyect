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
