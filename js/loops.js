//for loop
for (let i = 0; i < 5; i++) 
{
    console.log(i);
}

//for in loop
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) 
{
  txt += numbers[x]+" ";
}
console.log(txt)

//for of loop
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) 
{
  text += x+" ";
}
console.log(text)

//while loop
let i=0;
while (i < 10) 
{
    text += "\nThe number is " + i;
    i++;
}

//do-while loop
i=0
do 
{
    text += "\nThe number is " + i;
    i++;
}
while (i < 10);