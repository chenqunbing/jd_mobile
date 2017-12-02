

window.onscroll=function(){
	var scrollDistance=window.document.body.scrollTop;
	var jd_banner=document.querySelector('.jd_banner');
	var jd_nav=document.querySelector('.jd_nav');
	var maxDistance=jd_nav.offsetTop+jd_nav.offsetHeight;
	jd_banner.style.background='rgba(201,21,35,0)';
	var percent=scrollDistance/maxDistance;
	if(percent>1){
		percent=1;
	}
	jd_banner.style.background='rgba(201,21,35,'+percent+')';
}

function cutDownTime(){
	var totalHour=3;
	var totalSec=3*60*60;
	var liArr=document.querySelectorAll('.main_content .top_content li');
	var timerId=setInterval(function(){
		if(totalSec<=0){
			clearInterval(timerId);
			console.log("秒杀结束");
		}
		totalSec--;
		var hour=Math.floor(totalSec/3600);
		var minute=Math.floor(totalSec%3600/60);
		var second=Math.floor(totalSec%60);
		
		liArr[0].innerHTML=Math.floor(hour/10);
		liArr[1].innerHTML=hour%10;
		
		liArr[3].innerHTML=Math.floor(minute/10);
		liArr[4].innerHTML=minute%10;
		
		liArr[6].innerHTML=Math.floor(second/10);
		liArr[7].innerHTML=second%10;
	},1000);
}

cutDownTime();
