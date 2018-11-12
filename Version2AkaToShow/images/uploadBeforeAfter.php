<?php
		$servername = "localhost";
	    $username = "root";
	    $password = "";
	    $dbname = "ostrikadb";
	    $conn = new mysqli($servername, $username, $password, $dbname);
	    if ($conn->connect_error) {
	    	return null;
	    }
	    else
	    {
	    	mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
			$conn->set_charset("utf8mb4");
	    }
	    if(isset($_FILES['image']))
		{ 
			$errors= array();
			$file_name = $_FILES['image']['name'];
	        $file_size =$_FILES['image']['size'];
	        $file_tmp =$_FILES['image']['tmp_name'];
	        $file_type=$_FILES['image']['type'];
	        $dir = getcwd();
	        $temp = explode('.',$_FILES['image']['name']);
	        $file_ext=strtolower(end($temp));
	        $dir2 = $dir.'/'.$file_name;
	        $dir3 = './images/'.$file_name;
			
			$extensions= array("jpeg","jpg","png");
			      
			      if(in_array($file_ext,$extensions)=== false)
			      {
			         $errors[]="extension not allowed, please  choose a JPEG or PNG file.";
			      }
			      
			      if($file_size > 2097152)
			      {
			         $errors[]='File size must be excately 2 MB';
			      }
			      
			      if(empty($errors)==true)
			      {

			         move_uploaded_file($file_tmp,$dir2);
			         $query = "INSERT INTO picsofproyects ( idproyect,  type, linkToPic ) 
	            		  VALUES  ( ?, ?, ?)";
					$prepared_stmt = $conn -> prepare ( $query );
					$id = $_GET['id'];
					$type = $_GET['BA'];
					$prepared_stmt -> bind_param ( 'sss' , $id, $type, $dir3);
				  
					if  ( $prepared_stmt -> execute() ) 
					{
						$conn -> close();
						header('Location: ../IndexAdmin.php');
						die();
					} else {
						return array('status' => "Internal server error", "code" => 500);
					}
			    }else{
			        print_r($errors);
			    }
			}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Ostrika Galería</title>
		<link rel="stylesheet" href="../css/mystyles.css">
 		<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></head>
<body>
      <form method="POST" enctype="multipart/form-data">
         <input type="file" name="image" />
         <input type="submit"/>
      </form>
	<script
  		src="https://code.jquery.com/jquery-3.3.1.js"
  		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  		crossorigin="anonymous"></script>
</body>
</html>

		