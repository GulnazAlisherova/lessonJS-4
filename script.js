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

