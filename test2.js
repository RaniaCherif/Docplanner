const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

let guestLength=Object.keys(GUEST_LIST).length;
console.log("Guest list Length is : "+guestLength);

function greeting(name) {
	if (GUEST_LIST[name]){
		 return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
	}
	   return "Hi! I'm a guest."	 
}


greeting("Norman");
greeting("Ghazi");
greeting("Wendy");
greeting("Karla");
greeting("Sofien");

