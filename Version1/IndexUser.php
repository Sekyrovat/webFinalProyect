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
				<div>
				<p class="title is-1 has-text-centered">Products</p>
				<?php include 'html/ProductsMenu.php'; ?> 	
			</div>
			</section>

			<section id="ProductsFloorsSection" class="is-hidden">
				<p>ProductsFloors</p>
			</section>
			<section id="ProductsVeneerSection" class="is-hidden">
				<p>ProductsVeneer</p>
			</section>
			<section id="ProductsMosaicsSection" class="is-hidden">
				<p>ProductsMosaics</p>
			</section>
			<section id="ProductsBathSection" class="is-hidden">
				<p>ProductsBath</p>
			</section>


			<section id="ProjectsSection" class="is-hidden">
			<div>
				<p class="title is-1 has-text-centered">Preview Projects</p>
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
  </body>
</html>