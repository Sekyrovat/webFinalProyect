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
			<?php include 'html/navBarWithoutUser.php'; ?> 
		</header>
		
		<main>
			<section id="HomeSection">
				<?php include 'html/HomeSection.php'; ?> 	
			</section>
			<section id="AboutSection" class="is-hidden">
				<?php include 'html/AboutSection.php'; ?> 	
			</section>

			<section id="ProductsSection" class="is-hidden">
					<div class="is-centered">
						<p class="title is-1 has-text-centered">Products</p>
						<br>
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
					<ul id="ProductsBathList">
					</ul>
				</div>
			</section>




			<section id="ProjectsSection" class="is-hidden">
				<div class="is-centered">
						<p class="title is-1 has-text-centered">Preview Projects</p>
						<br>
				</div>
				<div>
					<?php include 'html/ProjectsMenu.php'; ?> 	
				</div>
				
			</section>

			<section id="ProjectsBedroomSection" class="is-hidden">
				<div id="ProjectsBedroomID">
					<p class="title is-1 has-text-centered">Projects Bedroom</p>
					<ul id="ProjectsBedroomList">
					</ul>
					<div id="DIVProjectsBedroomID"> 
					</div>
				</div>
			</section>
			
			<section id="ProjectsLivingSection" class="is-hidden">
				<div id="ProjectsLivingID">
					<p class="title is-1 has-text-centered">Projects Living Room</p>
					<ul id="ProjectsLivingList">
					</ul>
					<div id="DIVProjectsLivingID"> 
					</div>
				</div>
			</section>

			<section id="ProjectsKitchenSection" class="is-hidden">
				<div id="ProjectsKitchenID">
					<p class="title is-1 has-text-centered">Projects Kitchen</p>
					<ul id="ProjectsKitchenList">
					</ul>
					<div id="DIVProjectsKitchenID"> 
					</div>
				</div>
			</section>

			<section id="ProjectsDinningSection" class="is-hidden">
				<div id="ProjectsDinningID">
					<p class="title is-1 has-text-centered">Projects Dinning Room</p>
					<ul id="ProjectsDinningList">
					</ul>
					<div id="DIVProjectsDinningID"> 
					</div>
				</div>
			</section>

			<section id="ProjectsBathroomSection" class="is-hidden">
				<div id="ProjectsBathroomID">
					<p class="title is-1 has-text-centered">Projects Bathroom</p>
					<ul id="ProjectsBathroomList">
					</ul>
					<div id="DIVProjectsBathroomID"> 
					</div>
				</div>
			</section>

			
			<section id="BeforeAfterSection" class="is-hidden">
				<div class="is-centered">
					<p class="title is-1 has-text-centered">Before & After</p>
					<br>
				</div>
				<div>
					<?php include 'html/BeforeAfterMenu.php'; ?> 	
				</div>	
			</section>

			<section id="BeforeAfterBedroomSection" class="is-hidden">
				<div id="BeforeAfterBedroomID">
					<p class="title is-1 has-text-centered">Before&After Bedroom</p>
					<ul id="BeforeAfterBedroomList">
					</ul>
					<div id="DIVProjectsBeforeBedroomID"> 
					</div>
				</div>
			</section>

			<section id="BeforeAfterLivingSection" class="is-hidden">
				<div id="BeforeAfterLivingID">
					<p class="title is-1 has-text-centered">Before&After Living Room</p>
					<ul id="BeforeAfterLivingList">
					</ul>
					<div id="DIVProjectsBeforeLivingID"> 
					</div>
					
				</div>
			</section>

			<section id="BeforeAfterKitchenSection" class="is-hidden">
				<div id="BeforeAfterKitchenID">
					<p class="title is-1 has-text-centered">Before&After Kitchen</p>
					<ul id="BeforeAfterKitchenList">
					</ul>
					<div id="DIVProjectsBeforeKitchenID"> 
					</div>
					
				</div>
			</section>

			<section id="BeforeAfterDinningSection" class="is-hidden">
				<div id="BeforeAfterDinningID">
					<p class="title is-1 has-text-centered">Before&After Dinning Room</p>
					<ul id="BeforeAfterDinningList">
					</ul>
					<div id="DIVProjectsBeforeDinningID"> 
					</div>
					
				</div>
			</section>
	
			<section id="BeforeAfterBathroomSection" class="is-hidden">
				<div id="BeforeAfterBathroomID">
					<p class="title is-1 has-text-centered">Before&After Bathroom</p>
					<ul id="BeforeAfterBathroomList">
					</ul>
					<div id="DIVProjectsBeforeBathroomID"> 
					</div>
					
				</div>
			</section>

			<section id="SearchSection" class="is-hidden">
				<div id="SearchID">
					<p class="title is-1 has-text-centered">Results of Search</p>
					<p class="title is-3 has-text-centered" id="Psearch"></p>
					<ul id="SearchList">
					</ul>
				</div>
			</section>

		</main>
		<script type="text/javascript" src="js/bulma-carousel.js"></script>
		<script
  		src="https://code.jquery.com/jquery-3.3.1.js"
  		integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  		crossorigin="anonymous"></script>
		<script type="text/javascript" src="js/Index.js"></script>
		<script type="text/javascript" src="js/HomeJQ.js"></script>
		<script type="text/javascript" src="js/navJQ.js"></script>
		<script type="text/javascript" src="js/SearchJQ.js"></script>
		<script type="text/javascript" src="js/GetProductsNoUserJQ.js"></script>
		<script type="text/javascript" src="js/GetProjectsJQNoUser.js"></script>
		<script type="text/javascript" src="js/GetProjectsBeforeAfterNoUserJQ.js"></script>
		<script src="https://unpkg.com/ionicons@4.4.6/dist/ionicons.js"></script>
</html>