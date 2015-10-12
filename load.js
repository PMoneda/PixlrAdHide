try{
	document.getElementsByClassName('ad-wrap')[0].remove();
    document.getElementsByTagName('body')[0].style.width = "100%";
	
}catch(e){
	console.log(e);
}