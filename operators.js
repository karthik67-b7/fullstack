//1.arithmetic operators
//arithmetic operators are used to perform arithmetical operations
let a =10;
let b = 5;
console.log("Arithmetic operators:");
console.log("a=",a,"b=",b);//output the values of
let sum = a+b; // addition
let difference = a-b; //subtraction
let product = a*b; // multiplication
let quotient = a/b; // division
let reminder = a%b; // modulus[reminder of division]
let exponent =a**b; //



//2,assignment operators
let x = 5   ; // assignment
x+=5;// addition assignment 
x-=3;// subtraction assignment
x *= 2;
x/=4;
x%=3; 
console.log("assignment operators:");
console.log("x  after r assignment",x);
console.log('/n');






//3.comparision operators
let a = 10;
let b = 20;
let isequal =(a==b);
let isStrictequal=(a===b);
let isNotequal=(a!=b);
let isstrictNotequal = (a!==b);
let isGreaterthan = (a>b);
let islessthan = (a<b);
let isGreaterthanEqual = (a>=b);
let islessthanEqual = (a<=b);
console.log("comparision operators:");
console.log("Is Equal",isEqual);
console.log("Is Strict Equal",isStrictEqual);
console.log("Is Not Equal",isnotEqual);
console.log("Is Strict Not Equal",isStrictNotEqual);
console.log("Is Greater than",isgreaterthan);
console.log("Is Less Than",islessthan);



//4.logical operators
let andOperator =(a > 0 && b>0);
let orOperator=(a>0 || b<0);
let notOperator =!(a<b);
console.log("logical operators:");
console.log("AND operator:", andOperator);
console,log("OR operator:",orOperator);
console.log("NOT operator:,",notOperator);

//5. Bitwise opeartors
let bitwiseand = a&b;
let bitwiseOr = a|b;
let bitwiseXor = a^b;
let bitwiseNot = a;
let leftshift = a<<1;
let rightshift = a>>1;
console.log("Bitwise operators:");
console.log("Bitwise AND:",bitwiseand);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise NOT:",bitwiseNot);
console.log("left Shift:",leftshift);
console.log("right Shift:",rightshift);

