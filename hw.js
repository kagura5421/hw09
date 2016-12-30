$(document).ready(function(){
    
    $(".playground").mouseover(function(){
       $("div.hint").css("display","block");
    });
    $(".playground").mouseout(function(){
       $("div.hint").css("display","none");
    });
    
    
});