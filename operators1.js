let x=5;
x+=5;
x-=3;
x*=12;
x/=10;
x%=3;
console.log("assignmennt operators");
console.log("x afte r assignment",x);
console.log("/n");


//comparison operators
let a = 10;
let b = 20;
let isEqual = (a==b);
let isStrictEqual = (a===b);
let isNotEqual = (a!=b);
let isStrictNotEqual =  (a!==b);
let isGreaterThan = (a>b);
let isLessThan = (a<b);
console.log("IS EQUAL:",isEqual);
console.log("IS STRICT EQUAL:",isStrictEqual); 
console.log("IS NOT EQUAL:",isNotEqual);
console.log("IS NOT STRICT EQUAL:",isStrictNotEqual);
console.log("IS GREATER THAN:",isGreaterThan);
console.log("IS LESS THAN:",isLessThan);
//logical operators
let andOperators = (a > 10 && b > 20);
let orOperators = (a > 40 || b < 30);
let notOperators = !(a<b);
console.log("and",andOperators);
console.log("or",orOperators);
console.log("not",notOperators);
//bitwise operators
let a = 10;
let b = 20;
console.log("bitwise and",a&b);
console.log("bitwise or",a|b);
console.log("bitwise xor",a^b);
console.log("bitwise not",~a);
console.log("bitwise leftshift",a<<1);
console.log("bitwise rightshift",a>>1);


//
let age = 18;
let eligibility =(age>=18)? "eligible to"