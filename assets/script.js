let count = 0;
let aumen = document.getElementsByClassName("aumen");
let dimi = document.getElementsByClassName("dimi");
const CURRENT_NUMBER = document.getElementById('currentNumber');


 
function increment() {
	
if(count >=0){
    
        CURRENT_NUMBER.style.color = "black";
        aumen.addEventListener("click", count++, CURRENT_NUMBER.innerHTML = count);
     }

 else if(count >=10){
    aumen.removeEventListener("click", CURRENT_NUMBER.innerHTML = count);
}
 else{
    aumen.addEventListener("click", count++, CURRENT_NUMBER.innerHTML = count);
 }
}

function decrement() {
 
    

    count < 1? CURRENT_NUMBER.style.color = "red" :  CURRENT_NUMBER.style.color = "black";
     
    
    dimi.addEventListener("click", count--, CURRENT_NUMBER.innerHTML = count);
}








