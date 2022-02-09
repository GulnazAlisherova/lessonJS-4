let example2Button = document.getElementById('example2');
example2Button.onclick = function() { // при нажатии
  alert("My name is Gulnaz :)");
}

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function(){ // добавить слушатель события 
  alert("Bye!");
})
example3Button.addEventListener('click', function(){ // добавить слушатель события 
  alert("I just kidding");
})


let example4Button = document.querySelectorById('#example4');
example4Button.addEventListener('click', function(){ 
  example4Button.textContent = "Nice to meet you!";
})

let example5Button = document.getElementById('example5');
example5Button.addEventListener('click', function(){ 
  alert("Bye!");
})