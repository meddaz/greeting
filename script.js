submit.addEventListener('click', msg);

function msg() {
  
var nameVal = document.getElementById('name').value;
 greeting.innerHTML = 
   `Hello, ${nameVal}`;
   
   "Hello, " + nameVal + "!";
}