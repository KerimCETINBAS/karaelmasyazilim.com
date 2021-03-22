<script>

	//export let segment;
	let scrollY
	$:isHeaderScrolled = false // scrollY > 96
	
</script>

<style type="text/postcss" >
	
	.social {
		@apply w-26 h-26;
	}
	</style>


<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
</svelte:head>
<svelte:window bind:scrollY={scrollY}/>
<header class="w-full h-24 bg-gray-800 bg-opacity-20 border-b border-gray-700 absolute z-10"
		class:fixedHeader={isHeaderScrolled}
>

	<div id="container" class="container container-lg mx-auto ">

		<div class="flex  h-24">
			<div id="logo" alt="logo" class="h-full ">
					<img src="/logo.png" alt="karaelmasyazılım logo"  class="h-full p-3 "/>
			</div>
			
			<div class="flex flex-col flex-auto">
				<div id="numb" class="self-end p-3  font-semibold font-md">
					<small>
						<a href="tel:+905438559800" class="text-gray-50"> <i class="fa fa-phone"></i> +90 (543) 855 98 00</a>
					</small>
					<small class="ml-6 font-semibold font-md">
						<a href="mailto:iletisim@karaelmasyazilim.com" class="text-gray-50"> <i class="fa fa-envelope"></i> iletisim@karaelmasyazilim.com</a>
					</small>
				</div>

				<!--
				<nav class="self-center align-self-middle">
					<ul class="flex">
						<li class=""><a href="/" aria-current="{segment === undefined ? 'page' : undefined}"class="nav-item"><i class="fa fa-home text-red-500 bg-red-500"></i></a></li>
						<li><a href="/about" aria-current={segment === "about" ? 'page' : undefined} class="nav-item">Hakkımızda</a></li>
						<li><a href="/contact" class="nav-item" aria-current={segment === "contact" ? 'page' : undefined}>İletişim</a></li>
					</ul>
				</nav>-->
			</div>
			</div>

			<div>
		</div>
	</div>

</header>
<main>
	<slot></slot>
</main>	


<section>
		
<div class="w-full bg-gray-800">
<section>
<div id="contact" class="bg-white  w-full py-12">
	<div class="container container-lg mx-auto flex">

		<div class="flex-1 h-full ">
			<div class="mapouter">
				<div class=" my-3 h-108 w-full">
						<iframe title="adress" class=" h-166  w-full" id="gmap_canvas"
				src="https://maps.google.com/maps?ll=41.149729940570865,27.8270129158163&q=&t=&z=19&ie=UTF8&iwloc=&output=embed" 
				frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</div>
		</div>
		<!--
		<form action="#" class="w-1/2 pl-26">

			<ul class="mt-3 text-gray-600 uppercase">
				<li>Kara Elmas Yazılım</li>
				<li>Muhittin mah. Çetin Emeç Bul.</li>
				<li>Fidanoğlu yapı</li>
				<li>Kat : 3 , Daire : 9</li>
			</ul>

			<div class="mt-12 w-full">
				<input type="text" placeholder="Adınız"
				class="contact-input"
				>
				
			</div>
			<div class="flex  mt-3">
				<input type="email" placeholder="E-postanız"
				class="contact-input">
				
			</div>
			<div class="flex mt-3">
				<textarea name="" id="" cols="46" rows="3"
				class="w-full rounded-sm resize-none outline-none hover:outline-none p-4"></textarea>
			</div>
			<div class="flex mt-3">
				<button type="submit" class="bg-gray-800 py-2 px-6 rounded-sm text-gray-50">Gönder</button>
			</div>
		</form>  -->

		<div class="flex flex-col  justify-center w-126 items-center align-middle ">
			<address class="pt-3 text-gray-600  pl-14">
				<p class="text-gray-600">
					<strong class="text-xl"> Kara Elmas YazılımMuhittin mah. Çetin Emeç Bul. Fidanoğlu iş merkezi
					Kat : 3 , Daire : 9</strong>
				</p>
			</address>

			<div class="w-full" >
				<img src="adresqr.svg" class="w-full" alt="adres qr kodu">	
			</div>
			<div class="flex  items-center  pl-14">
			
			<div id="facebook" class="social">
				<a href="#facebook">
					<i class="fab fa-facebook-square fa-3x"></i>
				</a>
			</div>
			<div id="instagram" class="social">
				<a href="#facebook">
					<i class="fab fa-instagram fa-3x"></i>
				</a>
			</div>
			<div id="twitter" class="social">
				<a href="#facebook">
					<i class="fab fa-twitter fa-3x"></i>
				</a>
			</div>
			
			<div id="forsquare" class="social">
				<a href="#facebook">
					<i class="fab fa-foursquare fa-3x"></i>
				</a>
			</div>
			
	</div></div>
		
			
		</div>
	</div>
	</section>
	</div>
</section>

<footer class="bg-gray-800">
	<div class="container container-lg mx-auto text-gray-50 text-md">
		<small>	karaelmasyazilim.com  websitesi ve içinde yer alan içerik tamamen açık kaynak kodludur ve <strong>MIT </strong> lisansı altında lisanslanmıştır.  </small>
	</div>
</footer>