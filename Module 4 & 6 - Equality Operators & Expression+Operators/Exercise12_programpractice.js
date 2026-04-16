//Write a program to print each character in the string individually in new line. ex: s = "Hello World".
function printeachchar(a)
{
let x="";
const charArray = a.split(''); //splitvalue [H,e,l,l,o, ,W,o,r,l,d]
for(let i=0;i<charArray.length;i++)
{
 x=charArray[i];
 console.log(x);
}
}
printeachchar("Hello World");