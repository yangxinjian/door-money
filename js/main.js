$(function() {
	var modelArr = $('.model');
	var pic_1 = $('.pic-1'),
		pic_2 = $('.pic-2'),
		pic_3 = $('.pic-3'),
		pic_4 = $('.pic-4');

	pic_1.mouseover(function(){
		$(modelArr[0]).css("display","block");
	});

	pic_1.mouseout(function(){
		$(modelArr[0]).css("display","none");
	});
	pic_2.mouseover(function(){
		$(modelArr[1]).css("display","block");
	});

	pic_2.mouseout(function(){
		$(modelArr[1]).css("display","none");
	});
	pic_3.mouseover(function(){
		$(modelArr[2]).css("display","block");
	});

	pic_3.mouseout(function(){
		$(modelArr[2]).css("display","none");
	});
	pic_4.mouseover(function(){
		$(modelArr[3]).css("display","block");
	});

	pic_4.mouseout(function(){
		$(modelArr[3]).css("display","none");
	});
})