$('#globo, #globo-uno,#globo-dos, #globo-tres, #globo-cuatro').click(function(){
   $(this).css('display','none')
}); // Inicio del ready




$("button").click(function(){
//   function llegadaFinal(){
//    $('#globo').html ('BUM');
//   } 
    
    function loopGlobo(){
   $("#globo").animate({
                        bottom: "500px",
                        zIndex:-100},2940);
 $("#globo").animate({
                        bottom: "-150px",
                        zIndex:100},loopGlobo);
   }
   loopGlobo();
   
   function loopGlobo1(){
   $("#globo-uno").animate({bottom: "500px",
                           zIndex:-100},2940);
 $("#globo-uno").animate({bottom: "-150px",
                         zIndex:100},1000, loopGlobo1);
  
   }
   loopGlobo1();
   
   function loopGlobo2(){
   $("#globo-dos").animate({bottom: "500px",
                           zIndex:-100},2310);
 $("#globo-dos").animate({bottom: "-150px",
                         zIndex:100},1000, loopGlobo2);
  
   }
   loopGlobo2();
   
   
   function loopGlobo3(){
   $("#globo-tres").animate({bottom: "500px",
                            zIndex:-100},3200);
 $("#globo-tres").animate({bottom: "-150px",
                          zIndex:100},1000, loopGlobo3);
  
   }
   loopGlobo3();
   
   function loopGlobo4(){
   $("#globo-cuatro").animate({bottom: "500px",
                              zIndex:-100},2500);
 $("#globo-cuatro").animate({bottom: "-150px",
                            zIndex:100},1000, loopGlobo4);
  
   }
   loopGlobo4();
   
    function loopGlobo5(){
   $("#globo-cinco").animate({bottom: "500px"},3100);
 $("#globo-cinco").animate({bottom: "0px"},1000, loopGlobo5);
  
   }
   loopGlobo5();
   
});