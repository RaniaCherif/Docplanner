const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

let guestLength=Object.keys(GUEST_LIST).length;
console.log("Guest list Length is : "+guestLength);

function greeting(name) 
{ 
  let visitor="Guest"; 
	for(let i=0;i<guestLength;i++)
		{      
			if(name===Object.entries(GUEST_LIST)[i][0])
				{
          visitor=Object.entries(GUEST_LIST)[i][0];          
				  console.log("Hi! I'm "+ visitor+", and I'm from "+Object.entries(GUEST_LIST)[i][1]);
				  break;
				}    
		}
    if(visitor==="Guest")
      console.log("Hi! I'm a Guest");
}


greeting("Norman");
greeting("Ghazi");
greeting("Wendy");
greeting("Karla");
greeting("Sofien");

