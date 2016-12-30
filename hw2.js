$().ready(function(){
  var tipColor=['red','yellow','orange','green'];
  
  function matchLevel(password){
    if(password.length===0){
        return -1;
    }
	else if(password.length>=1&&password.length<6){
		return 0;
	}
	else if(password.length>=6&&password.length<10){
		return 1;
	}
	else if(password.length>=10&&password.length<16){
		return 2;
	}
	else{
		return 3;
	}
  }

 
    
  $("#password>input").keyup(function(){
    var pass = $(this).val();
    var level = matchLevel(pass);
        if(level>=0){
            $(".tips[level='0']").css("background",tipColor[0]);
        }else{
            $(".tips[level='0']").css("background","");
        }
       if(level>=1){
            $(".tips[level='1']").css("background",tipColor[1]);
        }else{
            $(".tips[level='1']").css("background","");
        }
       if(level>=2){
            $(".tips[level='2']").css("background",tipColor[2]);
        }else{
            $(".tips[level='2']").css("background","");
        }
       if(level>=3){
            $(".tips[level='3']").css("background",tipColor[3]);
        }else{
            $(".tips[level='3']").css("background","");
        }
      
  });


});