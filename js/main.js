$(function() {
	var imgArr = ["img/img11.gif","img/img22.gif","img/img33.gif","img/img44.gif","img/img55.gif","img/img66.gif","img/img77.gif","img/img88.gif"];

	var liArr = $('.bgcolor-gray ul li');
	var imgArrs = $('.bgcolor-gray ul li div img') 

	for(var i = 0;i < liArr.length;i++){
		liArr.mouseover(function(){
			imgArrs[i].html('src',imgArr[i]);
		})
	}

})