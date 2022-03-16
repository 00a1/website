const countEl = document.getElementById('count');
var myCookie = Cookies.get("count")
updateVisitCount();

function updateVisitCount() {
	if(myCookie){
		fetch('https://api.countapi.xyz/get/not00a.com/00a2')
	    .then(res => res.json())
	    .then(res => {
	    	countEl.innerHTML = res.value;
	    })
	}
	else{
		Cookies.set("count", "true")
	    fetch('https://api.countapi.xyz/update/not00a.com/00a2/?amount=1')
	    .then(res => res.json())
	    .then(res => {
	    	countEl.innerHTML = res.value;
	    })
	}
	
}