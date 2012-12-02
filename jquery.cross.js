jQuery(function($){
 		var interval = 7000;
         var max_num = $("#main_mv ul li").length - 1;
         var num = 0;
         $("#main_mv ul li").hide();
         $("#main_mv ul li:first").show().addClass("active");
		
		$(window).load(function(){
		timer = setTimeout(crossfade,interval);
		});

        function crossfade(){
            if ( num == max_num ){
                   	$("#main_mv ul li.active").fadeOut("middle").removeClass("active");
                   	num = 0;
                   	$("#main_mv ul li").eq(num).fadeIn("middle").addClass("active");

            }else{
                	$("#main_mv ul li.active").fadeOut("middle").removeClass("active");
					++num;
					$("#main_mv ul li").eq(num).fadeIn("middle").addClass("active");
            }
        timer = setTimeout(crossfade,interval);
        }

});