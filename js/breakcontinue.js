let text;
//using break in loop
for (let i = 0; i < 10; i++) 
{
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
}
console.log(text);

text="";
//using continue in loop
for (let i = 0; i < 10; i++) 
{
    if (i === 3) { continue; }
    text += "The number is " + i + "\n";
}
console.log(text);

