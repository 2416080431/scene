$(function(){
	setTimeout(function(){
		$(".word1").fadeOut();
	},1500);
	setTimeout(function(){
		$(".word2").fadeOut();
	},2700);
	setTimeout(function(){
		$(".word3").fadeOut();
		$(".houzi1").fadeOut();
	},4100);
	
	setTimeout(function(){
		$(".houzi2").fadeIn(1000);
		$(".bangzi").animate({
			height:"1000px"
		},1000,function(){
			$(".houzi2").fadeOut(1000);
			$(".bangzi").fadeOut(1000);
			setTimeout(function(){
				
			},500);
		});
	},4300);
	setTimeout(function(){
		$(".houzi3").fadeOut();
	},7000);
	setTimeout(function(){
		$(".houzi3").css("bottom","70%");
		$(".houzi3").fadeIn();
	},7300);
	
	setTimeout(function(){
		$(".houzi4").fadeOut();
		$(".houzi3").fadeOut();
	},7800);
	
	setTimeout(function(){
		$(".huli1").fadeOut();
		$(".houzi5").fadeOut();
	},8500);
	
	
})

