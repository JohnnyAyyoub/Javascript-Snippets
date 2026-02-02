let userInput=Number(prompt("Enter Number"));
let a=0, b=1;

for(let i=0; i<userInput; i++){
alert(a);
let next=a+b;
a=b;
b=next;
}