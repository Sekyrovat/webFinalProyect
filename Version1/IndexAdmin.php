<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Ostrika Galería</title>
		<link rel="stylesheet" href="css/mystyles.css">
 		<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
	</head>
	
	<body>
		<header>
			<?php include 'html/navBarAdmin.php'; ?> 
		</header>
		
		<main>
			<section id="HomeSection">
				<?php include 'html/HomeSection.php'; ?> 	
			</section>
			<section id="AboutSection" class="is-hidden">
				<?php include 'html/AboutSection.php'; ?> 	
			</section>

			<section id="ProductsSection" class="is-hidden">
					<div class="buttons is-centered">
						<p class="title is-1 has-text-centered">Products</p>
						<button class="button is-rounded is-dark" id="buttonAddProduct" >Add</button>
					</div>
					<div id="notiFloor" class="is-hidden">
						<div class="notification is-grey">
  							<button class="delete" id="deleteProductFloors"></button>
  							<form>
						  	<?php include 'html/AddProduct.php'; ?>
						  </form>
						</div>
					</div>
				<div>
					<?php include 'html/ProductsMenu.php'; ?> 	
				</div>
			</section>



			<section id="ProductsFloorsSection" class="is-hidden">
				<div id="ProductsFloorID"> 
					<p class="title is-1 has-text-centered">Floors</p>
					<ul id="ProductsFloorsList"> 
					</ul>
				</div>



			</section>

			<section id="ProductsVeneerSection" class="is-hidden">
				<div id="ProductsVeneerID">
					<p class="title is-1 has-text-centered">Wooden Veneer</p>
					<ul id="ProductsVeneerList">
					</ul>
				</div>
			</section>


			<section id="ProductsMosaicsSection" class="is-hidden">
				<div id="ProductsMosaicsID">
					<p class="title is-1 has-text-centered">Mosaics</p>
					<ul id="ProductsMosaicsList">
					</ul>
				</div>
			</section>


			<section id="ProductsBathSection" class="is-hidden">
				<div id="ProductsBathID">
					<p class="title is-1 has-text-centered">Faucets</p>
					<ul id="ProductsMosaicsList">
					</ul>
				</div>
			</section>




			<section id="ProjectsSection" class="is-hidden">
				<div class="buttons is-centered">
						<p class="title is-1 has-text-centered">Preview Projects</p>
						<button class="button is-rounded is-dark" id="buttonAddProj" >Add</button>
					</div>
					<div id="notiProj" class="is-hidden">
						<div class="notification is-grey">
  							<button class="delete" id="deleteAddProj"></button>
  							<form>
  								<?php include 'html/AddProject.php'; ?>
						  </form>
						</div>
					</div>
				<div>
					<?php include 'html/ProjectsMenu.php'; ?> 	
				</div>
				
			</section>

			<section id="ProjectsBedroomSection" class="is-hidden">
				<p>ProjectsBedroom</p>
			</section>
			<section id="ProjectsLivingSection" class="is-hidden">
				<p>ProjectsLiving</p>
			</section>
			<section id="ProjectsKitchenSection" class="is-hidden">
				<p>ProjectsKitchen</p>
			</section>
			<section id="ProjectsDinningSection" class="is-hidden">
				<p>ProjectsDinning</p>
			</section>
			<section id="ProjectsBathroomSection" class="is-hidden">
				<p>ProjectsBathroom</p>
			</section>

			
			<section id="BeforeAfterSection" class="is-hidden">
			<div>
				<p class="title is-1 has-text-centered">Projects - Before & After</p>
				<?php include 'html/BeforeAfterMenu.php'; ?> 	
			</div>		
			</section>

			<section id="BeforeAfterBedroomSection" class="is-hidden">
				<p>BeforeAfterBedroom</p>
			</section>
			<section id="BeforeAfterLivingSection" class="is-hidden">
				<p>BeforeAfterLiving</p>
			</section>
			<section id="BeforeAfterKitchenSection" class="is-hidden">
				<p>BeforeAfterKitchen</p>
			</section>
			<section id="BeforeAfterDinningSection" class="is-hidden">
				<p>BeforeAfterDinning</p>
			</section>
			<section id="BeforeAfterBathroomSection" class="is-hidden">
				<p>BeforeAfterBathroom</p>
			</section>

		</main>
		<script type="text/javascript" src="js/bulma-carousel.js"></script>
		<script
  		src="https://code.jquery.com/jquery-3.3.1.js"
  		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  		crossorigin="anonymous"></script>
		<script type="text/javascript" src="js/Index.js"></script>
		<script type="text/javascript" src="js/IndexJQ.js"></script>
		<script type="text/javascript" src="js/HomeJQ.js"></script>
		<script type="text/javascript" src="js/navJQ.js"></script>
		<script type="text/javascript" src="js/AdminJQ.js"></script>
		<script type="text/javascript" src="js/GetElementsJQ.js"></script>
  </body>
</html>