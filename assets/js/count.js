const countEl = document.getElementById('count');
var myCookie = Cookies.get("count")
updateVisitCount();

function updateVisitCount() {
	if(myCookie){
		fetch('https://api.countapi.xyz/get/not00a.cf/00a')
	    .then(res => res.json())
	    .then(res => {
	    	countEl.innerHTML = res.value;
	    })
	}
	else{
		Cookies.set("count", "true")
	    fetch('https://api.countapi.xyz/update/not00a.cf/00a/?amount=1')
	    .then(res => res.json())
	    .then(res => {
	    	countEl.innerHTML = res.value;
	    })
	}
}