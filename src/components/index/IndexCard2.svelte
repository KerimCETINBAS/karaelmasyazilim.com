<script>
    export let  cardImgSrc = null, cardImgAlt=null;
    export let  cardLink="null";
</script>




<div id="card-body" class="w-full flex flex-row  rounded rounded-md h-36 overflow-hidden">
    <div id="card-img" class="w-full h-36 bg-red-200">
        <img src="{cardImgSrc}"
             alt={cardImgAlt}
        class="w-full h-full p-4 object-contain">
        
    </div>
    
   
    

</div>