let images = [];
images[0] = "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060";
images[1] = "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560";
images[2] = "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200";
images[3] = "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500";
images[4] = "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400";
images[5] = "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260";
images[6] = "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

let timer = null,    
    window_Width = window.innerWidth,
    window_Height = window.innerHeight;	

function setDelay() {	
	hideScreenSaver();
	if (timer && timer!=null) clearTimeout(timer);	
	timer = setTimeout(showScreenSaver, 10000);
};

function showScreenSaver() {	
	hideScreenSaver();
	let img = document.createElement('img'),		
		random = Math.floor(Math.random()*6);

	document.body.appendChild(img);	
	img.src =' '+ images[random] +' ';
	img.style.position ='absolute';
	img.style.zIndex ='9999';
	img.style.opacity = '0';
	img.style.transition = '0.3s ease 0.3s';
	img.addEventListener('load', function(){
		let img_Width = img.clientWidth,
    		img_Height = img.clientHeight,
    		diff_Width = window_Width - img_Width,
    		diff_Height = window_Height - img_Height,
			left = Math.floor(Math.random()*diff_Width),
    		top = Math.floor(Math.random()*diff_Height);
		if (left < 0) left = 0;
		if (top < 0) top = 0;
		if (img_Width > window_Width) img.style.width = window_Width + 'px';
		if (img_Height > window_Height) img.style.height = window_Height + 'px';

		img.style.top = top + 'px';
		img.style.left = left + 'px';
		img.style.opacity = '1';
	});

	timer = setTimeout(showScreenSaver, 5000);
};

function hideScreenSaver () {
	let del_Img = document.querySelector('img');	
	if (del_Img != null) {
		del_Img.style.opacity = '0';
		setTimeout(() => del_Img.remove(), '300');
	}
};

setDelay();

document.addEventListener("click", setDelay);
document.addEventListener("contextmenu", setDelay);
document.addEventListener("mousemove", setDelay);
document.addEventListener("keyup", setDelay);
document.addEventListener("scroll", setDelay);