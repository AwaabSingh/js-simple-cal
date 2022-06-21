alert('Welcome to javascript calculator')
const num1 = parseInt(prompt('Enter frist number'))
const num2 = parseInt(prompt('Enter second number'))
const math = prompt('enter either +, -, *, /')

if (math === '+') {
    alert(`Result is ${num1 + num2}`)
} else if (math === '-') { 
    alert(`Result is ${num1 - num2}`)
}else if (math === '*') { 
    alert(`Result is ${num1 * num2}`)
} else if (math === '/') { 
    alert(`Result is ${num1 / num2}`)
} 
else {
    alert('Invalid Symbol.. Try again')
}