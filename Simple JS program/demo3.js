//divisable number 2 || 3
var num1 = 1
var num2 = 100
console.log("number devisable by 2 || 3 is 1 to 100:")
while(num1<=num2)
{
    if(num1%2==0 || num1%3==0) 
    {
        console.log(num1)
    }
    num1++
}
