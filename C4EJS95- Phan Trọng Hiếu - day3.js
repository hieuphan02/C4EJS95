// 1. Variable swap
// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
let a = 5;
let b = 10;
console.log(a, b);
// Example 1:
[a, b] = [b, a];
console.log(a, b);
// Example 2:
let c;
c = a;
a = b;
b = c;
console.log(a, b);
// 2. Split String into Array
const quote = "Hello beauty there";
let res = quote.split(",");
console.log(res);
// 3.
const array = [1, 2, 3, 4];
console.log(...array);
// 4.
let shoppingItems = ["Jeans", "T-shirt", "Socks"];
let order = prompt(
  "Hi there, welcome to the shop admin panel, what do you want(C, R, U, D)?"
).toUpperCase();
while (!(order === "C" || order === "R" || order === "U" || order === "D")) {
  order = prompt(
    "This command is not supported. Try again please"
  ).toUpperCase();
}
if (order === "C") {
  const newItem = prompt("Enter the new item");
  shoppingItems.push(newItem);
  console.log(...shoppingItems);
} else if (order === "R") {
  console.log(...shoppingItems);
} else if (order === "U") {
  const positionUpdate = Number(
    prompt("Enter the posiotion you want to update")
  );
  indexUpdate = positionUpdate - 1;
  const itemUpdate = prompt("Enter the new item");
  shoppingItems[indexUpdate] = itemUpdate;
  console.log(...shoppingItems);
} else if (order === "D") {
  const deleteItem = Number(prompt("Enter the position you want to delete"));
  indexDelete = deleteItem - 1;
  shoppingItems.splice(indexDelete, 1);
  console.log(...shoppingItems);
}
// 5. Write a script to ask users enter a sequence of numbers, separated by commas, calculate the sum of the numbers and show it
{
  const sequence = prompt(`Enter a sequence of number, separate by comma (,):`);
  let array = sequence.split(",");
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  alert(sum);
}
// 6. Write a script asking users to enter a sequence of numbers, separated by commas, find the smallest number and log it out
{
    const sequence = prompt(`Enter a sequence of number, separate by comma (,):`);
    let array = sequence.split(",");
    let min = array[0];
    for (i = 0;i < array.length;i++){
        if (array[i] < min){
            min = array[i]
        }
    }
    alert("The smallest number in your sequence is " + min);
}
// 7. Create an array containing at least 5 numbers, then ask user to enter a number, perform a search to look for the number in the array, if found, inform user the index of it in the array, if not, inform there's not.
    {
        const array = [ 3, 4, 6, -9, 10, -88, 2];
        let number = prompt ("Enter a number");
        if(array === number){
            alert(number + "is FOUND in the array at index 3");
        } else {
            alert (number + ' is NOT in the array! ');
        }
    i++;
    break;
    while(i < array.lenghth);
    }
    

// 9. Turtle JS. Draw the shape
{
    const penColors = [`red`, `gray`, `blue`, `purple`, `cyan`];
    let strokeSize = 25;
    let i = 1;
    let times = 0;
    do {
      color(penColors[i]);
      for (let j = 0; j < 4; j++) {
        fd(strokeSize);
        rt(90);
      }
      strokeSize += 25;
      times++;
      i++;
    } while (times < 4);
  }
  


 