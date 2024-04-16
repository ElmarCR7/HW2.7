// 1

const timerElement = document.getElementById('timer')

const clock = (seconds) => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        finish();
      } else {
       timerElement.innerHTML+=`<u>remained:</u> <b>${seconds}</b> second<br>`;
        seconds--;
      }
    }, 1000); 
  }
  
  const finish = () => {
    timerElement.innerHTML+=`<h1>half-minute The End!</h1>`;
  }
  
  clock(30);

  //2
  
  function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

function first(a, b) {
    return a + b;
}

function second(a, b) {
    return a - b;
}

function third(a, b) {
    return a * b;
}

console.log(calculate(50, 50, first)); 
console.log(calculate(50, 35, second)); 
console.log(calculate(5, 5, third)); 
