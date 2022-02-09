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
   num = 0;
   h1.textContent = num; 
});

let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function(){
  num = num + 1;
  h1.textContent = num; 
  //num += 1;
  //num++ ;
});

let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function(){
  num = num - 1;
  h1.textContent = num;   
});

let example6Div = document.querySelector('#example6');
example6Div.addEventListener('click', function(){
  example6Div.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255},  ${Math.random() * 255})`;
});

 let example7Div = document.querySelector('#example7');
 example7Div.addEventListener('click', function(){ //слушатель событий
   example7Div.remove();
 });

// document.querySelector('#example7').addEventListener('click', function{
//   this.remove();
// });

let example8Button = document.querySelector('#example8');
function example8Action() {
  alert("hello");
  example8Button.removeEventListener('click', example8Action);
}
example8Button.addEventListener('click', example8Action);



document.getElementById('level3').addEventListener('click',function(){
  alert("Level 3 clicked");
});
document.getElementById('level2').addEventListener('click',function(){
  
})