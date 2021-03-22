<script>
    export let cardTitle = null, cardText=null , cardImgSrc = null, cardImgAlt=null; /*cardLink=null*/
</script>




<div id="card-body" class="w-full flex flex-col h-96 rounded rounded-md overflow-hidden">
    <div id="card-img" class="w-full h-36 bg-red-200">
        <img src={cardImgSrc} 
             alt={cardImgAlt}
        class="w-full h-full p-4 object-contain">
        
    </div>
    <div id="card-body" class="w-full p-4 bg-red-400 h-full content-around">
        <h2 class="font-extrabold text-lg ">{cardTitle}</h2>
        
        <div id="card-divider-1" class="w-2/5 h-0 border-b-4 mt-2 boder-b-gray-800"></div>
        <p class="w-full mt-3 bg-red-400 text-sm font-semibold">{cardText}</p>
     <!-- 
        <div id="card-divider-1" class="w-2/5 mt-3 h-0 border-b-4 boder-b-gray-800"></div>
     <a href="{cardLink}" class="mt-3 inline-block py-2 px-3 bg-red-500 rounded text-white"><small>Daha fazla</small></a> -->
    </div>
    
   
    

</div>