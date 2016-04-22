(
    function(){
    function init(){
       var btnn= document.getElementById("btnAdd") ;
        btnn.addEventListener("click",addit);      
    }
    function addit(){ 
        var dec= [];
        var number=document.getElementById("Numbers").value;
        var addin= number.split(",");
        for(var i=0;i<addin.length;i++)
            {
                var pop=parseInt(addin[i],10);
           dec.push(pop);
            }
        document.getElementById("num").value=dec.reduce(res);
        document.getElementById("section").style.display='block';
    }
        function res(total,numb){
            return total+numb;
        }
init();
    }
)();
