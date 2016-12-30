$(document).ready(function(){
    
 var color = "white";
  $(".col").css("opacity","0");
  $(".hint").text("現在該"+color+"下");
  
  $(".col").click(function(){
    $(this).css("opacity","1");
    $(this).addClass(color);
    if(color==="white"){
      color="black";
    }
    else{
      color="white";
    }
    $(".hint").text("現在該"+color+"下");
  });
  $("#restart").click(function(){
    $(".col").css("opacity","0");
    color = "white";
     $(".hint").text("現在該"+color+"下");
    $(".col").removeClass("white");
    $(".col").removeClass("black");
  });
});