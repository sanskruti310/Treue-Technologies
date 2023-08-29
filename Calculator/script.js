let string = "    ";
let buttons = document.querySelectorAll('.button');
let memoryValue = 0;

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === 'M+') {
      // Add the current value to the memoryValue
      const currentValue = parseFloat(string); 
      memoryValue += currentValue;
      console.log('Memory Value:', memoryValue);
    } else if (e.target.innerHTML === 'M-') {
      // Subtract the current value from the memoryValue
      const currentValue = parseFloat(string); 
      memoryValue -= currentValue;
      console.log('Memory Value:', memoryValue);
    }
    else{ 
     console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
}) 