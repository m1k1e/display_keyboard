const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');



for(let button of buttons) {
  button.onclick = function() {
    if(button.classList.contains('clear')){
        display.textContent = ' ';
      }else {
          display.append(button.textContent);
        }
  };
}