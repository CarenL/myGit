/*
* @Author: Administrator
* @Date:   2017-05-10 09:25:24
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-24 15:51:27
*/

'use strict';
$(function(){
	// var big=(function(){
		$(".item-img img").each(function(){
			$(this).mousemove(function(event) {
				/* Act on the event */
				var small=$(this);
				var src=$(this).attr("src");
				var big=$(".bigBox");
                var image=new Image();

                image.src=src;
                var orig_width=image.width;
                var orig_height=image.height;

                var current_width=small.width();
                var current_height=small.height();

                var offset=small.offset();
                var mx=event.pageX-offset.left;
                var my=event.pageY-offset.top;
                // console.log(event.pageX);
                // console.log(event.pageX);


                if(mx<current_width&&my<current_height&&mx>0&&my>0){
                	big.fadeIn(100);
                }else{
                	big.fadeOut(100);
                }if(big.is(":visible")){
                	var rx=Math.round(mx/current_width*orig_width-big.width()/2)*-1;
                	var ry=Math.round(my/current_height*orig_height-big.height()/2)*-1;
	                console.log(rx);
                	console.log(ry);
                	var bgp=rx+"px "+ry+"px";
                	var px=offset.left+mx-big.width()/2;
                	var py=offset.top-my+big.height()/2;
                	big.css({
                		left: px,
                		top: py,
                		backgroundPosition: bgp,
                		backgroundImage:"url("+src+")",
                		backgroundRepeat:"no-repeat"
                	});
                }
			});
			$(this).mouseleave(function(event) {
				/* Act on the event */
				$(".bigBox").css("display","none");
			});
		});
	// })();
})