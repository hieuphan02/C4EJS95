// 1. What are var and const in JavaScript?
// var and const are used to declare variables in JS
// 2. What are the differences between let and var?
// The difference between let and var is their scope.
// var can have global and function scope, but not block scope.
// let can have block and function scope, but not global scope.
// What are the differences between let and const?
//The difference between let and const is assignability. Variables declared with const cannot be reassigned, while those declared with let can be reassigned.
// 1. What is Boolean?
//Boolean are variables that only have a value of true or false.
// 2. What results in boolean?
// Boolean, conditionals, comparisons, operations of Booleans will yield a Boolean
// 3.	Write a program to print out
// a.	7 numbers, starting from 0 (no user input)
 
 for (i = 0; i<7;i++){
     console.log(i)
 }

// b.	n numbers, starting from 0, n entered by user
{
    const n = prompt ("Enter a number?")  ;
let i  
for (i = 0; i<n; i++){
    console.log(i)
}
}
// c. A sequence of numbers, starting from 3, ending before n, n entered by user
{
    const n = prompt ("Enter n") 
let i;
for (i=3 ; i<n; i++){
    console.log(i)
}
}
// d.	A sequence of numbers, starting from c, ending before n, c and n entered by user
{
    const n = prompt ("Enter n") 
    let c = prompt ("Enter c") 
    for (c;c<n;c++){
        console.log(c)
    } 
    }
// e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
{
    const n = prompt ("Enter n") -0
    let c = prompt ("Enter c")  -0
    for (c ; c < n ; c += 3){
        console.log(c)
    } 
    }
// f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
{
    const n = prompt ("Enter n") -0
    let c = prompt ("Enter c") -0
   let s = prompt ("Enter s") -0
    for (c; c < n ; c += s){
        console.log(c)
    } 
    }
    // 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
{ 
    const n = prompt ("Enter a number") 
    let i = 1
    let factorial = i
    for (i = 1;i<=n;i++){
        factorial *= i
    }
  alert ("The factorial of " + n + " is " +factorial )
}
// 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
{
    let userAge = prompt ("How old are you ?")
if (userAge <7) {
    alert ("You're not old enough to view this content")
} else {
    alert("Enjoy!")
}
}
// 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
{
    let x = prompt ("Enter a number")
    if(x<=4){
        alert("Lower half of 0-9")
    }else if (x>=5){
        alert ("Higher half of 0-9")
    }
 }
//  7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
{
    let n = prompt ("n = ")
    let x = prompt ("x = ")
    if (x< n/2){
        alert (x + " is in lower half of " + n)
    }else if (x> n/2 ){
        alert (x + " is in higher half of "+ n)
    }
}
// 8. Write a script to check if a number is even (divisible by 2) or odd number
{
    let number = prompt ("Enter a number")
    let oddOrEven = number % 2;
if (oddOrEven != 0 ){
    alert (number + " is odd number")
}else {
    alert(number + " is even number")
}
}
//9.
//a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)
{
    let n = 6;
    let i = 0;
    let x = n / 2;
    for (i; i < x; i++) {
      console.log("L");
    }
    for (x; x < n; x++) {
      console.log("H");
    }
  }
  //b. n L’s and H’s in total, n entered by user
{
    let n = prompt("Enter total number of L and H:");
    let i = 1;
    let x = n / 2; 
    for (i; i < x; i++) {
      console.log("L");
    }
    for (x; x < n; x++) {
      console.log("H");
    }
  }
  //c.	8 1’s and 0’s in total, consecutively
  {
      const number = 8 
  let time = 0
  while (time < number){
      console.log(0)
      console.log(1)
      time += 2
  }
}
// d. n 1’s and 0’s in total, consecutively, n entered by user
{
    const number = prompt ("Enter the total of 1's and 0's")
    let time = 0 
    while(time < number){
    console.log(0)
    console.log(1)
    time += 2
}
}
// 10.	Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
{
    const mass = prompt("Your weight in kg?")
    const height = prompt("Your height in cm ?") /100
    let bmi = mass /(height ** 2)
    if (bmi< 16){
        alert ("You are severely underweight")
    }else if(16<=bmi<18.5){
    alert ("You are underweight")
    }else if(18.5<=bmi<25){
        alert("You are normal")
    }else if(25<=bmi<=30){
        alert("You are overweight")
    }else if(bmi>30){
alert ("You are obese")
}
}
//11. Turtle
//a.  Square
{
    let i = 0;
    for (i; i < 4; i++) {
      fd(100);
      rt(90);
    }
  }
//b.  Triangle
{
    let i = 0;
    for (i; i < 3; i++) {
      fd(100);
      rt(120);
    }
  }
  //c.  Pentagon
{
    let i = 0;
    for (i; i < 5; i++) {
      fd(100);
      rt(72);
    }
  }
  //d. Hexagon
{
    let i = 0;
    for (i; i < 6; i++) {
      fd(100);
      rt(60);
    }
  }
  //12. Draw a polygon of n sides, n is user defined.
  {
    let n = prompt("Enter number of sides:");
    let i = 0;
    let angle = [(n - 2) * 180] / n;
    for (i; i < n; i++) {
      fd(100);
      rt(180 - angle);
    }
  }
      