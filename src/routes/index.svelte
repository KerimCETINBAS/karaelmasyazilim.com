<script>
	import IndexCard from '../components/index/IndexCard.svelte'
	import IndexCard2 from '../components/index/IndexCard2.svelte'

	
</script>
<!--#region banner -->

<section>
<div id="index-banner" class="h-156 w-full relative pt-24 z-0">
	<div id="index-banner-bg-cover" class="absolute left-0 top-0 w-full h-full opacity-70 bg-gray-800 z-0"></div>
	<div class="container container-lg mx-auto flex flex-col z-0">
		<div class="z-20 w-full h-96 mt-16 border-l border-l-3 border-gray-100 flex justify-evenly">
			<!-- 
				index banner inner left
			-->
			<div id="index-banner-inner-left" class="flex flex-col ">
				<h1 class="text-white text-lg font-extrabold">İHTİYAÇLARINIZA GÖRE</h1>
				<p  class="text-white text-xs font-bold mt-3">Ihtiyaçlarınıza göre sıfırdan şekillendirilmiş websiteleri tasarlıyoruz!</p>
				<ol class="text-white text-xs font-semibold list-disc mt-3">
					<li>Modüler</li>
					<li>Tekrar düzenlenebilir</li>
					<li>Mobil uyumlu</li>
					<li>Yüksek performans</li>
				</ol>
				<!--<div><button class="w-auto focus:outline-none outline-none  hover:outline-none py-3 px-6 mt-3 rounded-md text-md font-semibold text-white bg-gray-400 hover:bg-opacity-70 translate duration-300 bg-opacity-30"> Daha fazla bilgi al</button></div> -->
			</div>

			<!-- 
				index banner inner right
			-->
			<div id="index-banner-inner-right">
				<div id="hale">
					<div id="hale-circle-1" class="w-52 h-52 rounded-full border border-red-600 flex items-center justify-center">
						<div id="hale-circle-2" class="w-42 h-42 rounded-full border border-red-600 flex items-center justify-center">
							<div id="hale-circle-3" class="w-32 h-32 rounded-full border border-red-600 flex items-center justify-center">
								<button id="hale-inner" class="w-18 h-18 bg-red-500 rounded-full outline-none focus:outline-none hover:outline-none">
									<i class="fa fa-play text-white"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
<!--#endregion-->

<section>
<div id="index-banner-2" class="bg-gray-800">
	<div class="container container-lg py-12 mx-auto">
		<div  id="banner-2-top" class="grid grid-cols-4 gap-12">

			<div><IndexCard 
				cardImgSrc="stock-images/home_webdeveloper_pic1.png" 
				cardImgAlt="home_webdeveloper_pic1" 
				cardTitle="En güncel teknolojiler"
				cardText="En güncel teknolojileri takip ediyoruz. Uygulamalarınızı mevcut kaynaklar ile en verimli çalışacak şekilde oluşturuyoruz."/></div>
			<div><IndexCard 
				cardImgAlt="home_webdeveloper_pic2" 
				cardImgSrc="stock-images/home_webdeveloper_pic2.png"
				cardTitle="Kullanıcı odaklı dizayn"
				cardText="Kullanıcı deneyimine önem veriyoruz. Kullanıcıların alışkanlıkları ve isterlerine göre tasarlıyor, geliştirmeye devam ediyoruz." /></div>
			<div><IndexCard 
				cardImgAlt="home_webdeveloper_pic3" 
				cardImgSrc="stock-images/home_webdeveloper_pic3.png"
				cardTitle="Ölçeklenebilirlik"
				cardText="En büyük önceliklerimizden biri ölçeklenebilir uygulamar yaratmak, Uygulamalarımızı yaratırken, gelecekteki isterleri veya öngürülmeyen talepleri karşılayabilecek şekilde dizayn ediyoruz"  /></div>
			<div><IndexCard 
				cardImgAlt="home_webdeveloper_pic4" 
				cardImgSrc="stock-images/home_webdeveloper_pic4.png" 
				cardTitle="Modüler"
				cardText="Oluşturduğumuz bütün uygulamar parçalar halinde ve bir birinden bağımsız çalışabilecek şekilde planlanıyor"/></div>
		</div>
		<div id="banner-2-bottom" class="h-112 my-26 flex justify-evenly items-center">
			<center>
			<div class="w-2/3">
				<h2 class="text-white font-extrabold text-2xl">Tam mobil uyumlu & Progresif uygulamalar</h2>
				<p class="text-white text-lg">
						Bütün web sitesi uygulamalarımız mobil uyumlu ve Çevrim dışı çalışabilme gibi özelliklerin yanı sıra native bir uygulama ile aynı kullanıcı deneyimini sunabilir.
				</p>
			</div>
		</center>
			<img src="/	stock-images\home_webdeveloper_pic20.png" class="w-1/3 object-contain"  alt="">

		</div>
	</div>


	
</div>
</section>
<section>
	<div id="index-banner-3" class="bg-red-500">
		<div class="container container-lg py-26 mx-auto">
			<div class="grid grid-cols-3 gap-18">
	
				<div><IndexCard2 cardImgAlt="nodejs_pic" cardImgSrc="/stock-images/nodejs.png"/></div>
				<div><IndexCard2 cardImgAlt="express_pic" cardImgSrc="/stock-images/express.png" /></div>
				<div><IndexCard2 cardImgAlt="svelte_pic" cardImgSrc="/stock-images/svelte.png" /></div>
				<div><IndexCard2 cardImgAlt="sapper_pic" cardImgSrc="/stock-images/sapper.png" /></div>
				<div><IndexCard2 cardImgAlt="electron_pic" cardImgSrc="/stock-images/electron.svg" /></div>
				<div><IndexCard2 cardImgAlt="vue_pic" cardImgSrc="/stock-images/vue.png" /></div>
				<div><IndexCard2 cardImgAlt="postgresql_pic" cardImgSrc="/stock-images/postgresql.png" /></div>
				<div><IndexCard2 cardImgAlt="mysql_pic" cardImgSrc="/stock-images/mysql.png" /></div>
				<div><IndexCard2 cardImgAlt="mongodb_pic" cardImgSrc="/stock-images/mongodb.png" /></div>
				<div><IndexCard2 cardImgAlt="couchdb_pic" cardImgSrc="/stock-images/couchdb.png" /></div>
				<div><IndexCard2 cardImgAlt="pouchdb_pic" cardImgSrc="/stock-images/pouchdb.svg" /></div>
				<div><IndexCard2 cardImgAlt="redis_pic" cardImgSrc="/stock-images/redis.svg" /></div>
			</div>
		</div>
	</div>
	
</section>

<!--
<section>
<div id="index-banner-4" class="w-full  bg-red-500 pb-6">
		<div class="container container-lg mx-auto">
			
			<h2 class="text-lg font-bold py-2 px-6 mb-6 rounded-md shadow-sm bg-red-400">Websitesi çeşitleri</h2>
			<div class="grid grid-cols-2 gap-6">

			<IndexCard3 />
			<IndexCard3 />
			<IndexCard3 />
			<IndexCard3 />
			

			</div>
		</div>
</div>

</section>

-->



<style lang="postcss">
	#index-banner {
		background-image: url('/stock-images/fotis.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	#banner-2-bottom {
		background-image: url("/stock-images/home_webdeveloper_sectionbg1.png");
		background-size: cover;
	}

	.contact-input {
		@apply block; @apply w-full; @apply  rounded-sm; @apply  h-8; @apply  p-4; @apply  outline-none; @apply  hover:outline-none;
	}

</style>