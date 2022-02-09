// let example2Button = document.getElementById('example2');
// example2Button.onclick = function() { // при нажатии
//   alert("My name is Gulnaz :)");
// }

// let example3Button = document.getElementById('example3');
// example3Button.addEventListener('click', function(){ // добавить слушатель события 
//   alert("Bye!");
// });
// example3Button.addEventListener('click', function(){ // добавить слушатель события 
//   alert("I just kidding");
// });


// let example4Button = document.querySelectorById('#example4');
// example4Button.addEventListener('click', function() { 
//   example4Button.textContent = "Nice to meet you!";
// });

// let example5Div = document.querySelectorById('#example5');
// example5Div.addEventListener('click', function() { 
//   alert(example5Div.textContent.length);
// });

let num = 5;
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
  //h1.textContent = "Nice to meet you";
   h1.textContent = num; 
});

let num = 5;
let increaseButton = document.querySelector('h1');
let increaseButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
  //h1.textContent = "Nice to meet you";
   h1.textContent = num; 
});