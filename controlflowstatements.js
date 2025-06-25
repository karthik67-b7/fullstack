let age = 18;
if (age<18){
    console.log("you are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("you are an adult.");
}
else{
    console.log("You are a senior citizen.")
}
console.log("\n");


// example of switch statement
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
    default:
        console.log("Invalid Day");

}
//  for loop 
for(for let i =0;i<5;i++){
    console.log("iteration:",i);
}
//while loop 
let j=0;
while(j<5){
    console.log("while loop iteration",j);
    j++;
}
// do while 
let k=0
do{
    console.log("while do",k);
    k++;
}
while(k<5);