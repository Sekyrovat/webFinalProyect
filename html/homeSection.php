<section id="carouselIndex" class="hero has-carousel">
  <div class="hero-carousel carousel-animated carousel-animate-slide" data-autoplay="true">
    <div class='carousel-container'>
      <div class='carousel-item has-background is-active'>
        <img class="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" />
      </div>
      <div class='carousel-item has-background'>
        <img class="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" />
      </div>
    </div>
    <div class="carousel-navigation is-overlay">
      <div class="carousel-nav-left">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="carousel-nav-right">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>		 


  <section id="loginSection" class="is-hidden">
	<div class="hero-body has-text-centered">
    	<div class="columns is-multiline">
    		<div class="column">
    		</div>	
	    	<form>
				<fieldset class="column is-pulled-left">
					<div class="field" id="LogEmailDiv">
					  <p class="control has-icons-left has-icons-right">
					   
					    <input class="input is-rounded" type="email" placeholder="Email" id="logEmail">
					    <span class="icon is-small is-left">
					      <i class="fas fa-envelope"></i>
					    </span>
					    
					    <span class="icon is-small is-right" id="LogEmailSpan">
					    </span>
					  </p>
					</div>
					<div class="field" id="LogPassDiv">
					  <p class="control has-icons-left has-icons-right" >
					   
					    <input class="input is-rounded " type="password" placeholder="Password" id="logPass">
					    <span class="icon is-small is-left">
					      <i class="fas fa-lock"></i>
					    </span>

					    <span class="icon is-small is-right" id="LogPassSpan">
					    </span>
					  </p>
					</div>

					<div>
						<label class="checkbox has-text-grey-lighter">
	  					<input type="checkbox" id="rememLogin">
	  						Remember me
						</label>
					</div>
					<div class="field is-grouped is-grouped-right">
	  					<p class="control">
	    				<button class="button is-dark is-rounded" id="logButtonOK"> Login </button>
	  					</p>
	  					<p class="control">
	    				<button class="button is-light is-rounded" id="logButtonCancel"> Cancel </button>
	  					</p>
					</div>
				</fieldset>
			</form>
    	</div>
    </div>
   </section>

   <section id="registerSection" class="is-hidden">
		<div class="hero-body has-text-centered">
	    	<div class="columns is-multiline">
	    		<div class="column">
	    		</div>
		    	<form>
					<fieldset class="column is-pulled-left is-clipped">

						<div class="field" id="SignfNameDiv">
						  <p class="control has-icons-left has-icons-right">
						    <input class="input is-rounded" type="text" placeholder="First Name" id="SignfName">
						    <span class="icon is-small is-left">
						      <i class="fas fa-user"></i>
						    </span>
						    <span class="icon is-small is-right" id="SignfNameSpan">
					    	</span>
						  </p>
						</div>

						<div class="field" id="SignlNameDiv">
						  <p class="control has-icons-left has-icons-right" id="Sign">
						    <input class="input is-rounded" type="text" placeholder="Last Name" id="SignlName">
						    <span class="icon is-small is-left">
						      <i class="fas fa-user"></i>
						    </span>
					    	<span class="icon is-small is-right" id="SignlNameSpan">
						    </span>						    
						  </p>
						</div>

						<div class="field" id="SignEmailDiv">
						  <p class="control has-icons-left has-icons-right">
						    <input class="input is-rounded" type="email" placeholder="Email" id="SignEmail">
						    <span class="icon is-small is-left">
						      <i class="fas fa-envelope"></i>
						    </span>
					    	<span class="icon is-small is-right" id="SignEmailSpan">
					    	</span>						    
						  </p>
						</div>

						<div class="field" id="SignPassDiv">
						  <p class="control has-icons-left has-icons-right">
						    <input class="input is-rounded" type="password" placeholder="Password" id="SignPass">
						    <span class="icon is-small is-left">
						      <i class="fas fa-lock"></i>
						    </span>
					   	 	<span class="icon is-small is-right" id="SignPassSpan">
					    	</span>						    
						  </p>
						</div>

						<div class="field" id="SignPassCDiv">
						  <p class="control has-icons-left has-icons-right">
						    <input class="input is-rounded" type="password" placeholder="Confirm Password" id="SignPassC">
						    <span class="icon is-small is-left">
						      <i class="fas fa-lock"></i>
						    </span>
						    <span class="icon is-small is-right" id="SignPassCSpan">
					    	</span>					    
						  </p>
						</div>

						<div class="field is-grouped is-grouped-right">
		  					<p class="control">
		    				<button class="button is-dark is-rounded" id="SignButtonSignup"> Sign Up </button>
		  					</p>
		  					<p class="control">
		    				<button class="button is-light is-rounded" id="SignButtonCancel"> Cancel </button>
		  					</p>
						</div>
					</fieldset>
				</form>
	    	</div>
	    </div>
	</section>
</section>
