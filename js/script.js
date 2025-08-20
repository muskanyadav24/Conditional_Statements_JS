// 1.  Enter electricity unit and calculate amount to pay
// For first 50 units, Rs: 1/unit
// For next 100 units, 2/unit
// For next 100 units, 3/ units
// For units above 250, 4/units      
// For all bills above 150 units additional surcharge of 20%  of total bill amount is added.

let units = 275;
let amount = 0;

if(units <= 50){
    amount = units * 1;
}else if(units <= 150){
    amount = (50 * 1) + (units - 50) * 2;
}else if(units <= 250){
    amount = (50 * 1) + (100 * 2) + (units - 150) * 3;
}else{
    amount = (50 * 1) + (100 * 2) + (100 * 3) + (units - 250) * 4;
}

if(amount > 150){
    amount += amount * 0.2;
}

console.log("Q.1 Units consumed: " + units);
console.log("Q.1 Total amount to pay: Rs. " + amount);

document.write("<h4>Q.1 Units consumed :- " + units + "</h4>");
document.write("<h4>Q.1 Total amount to pay :- Rs. " + amount + "</h4>");

// 2.Write a JAVASCRIPT Program to print season according user input using switch case. (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)

let month = 12;

switch(true){
    case (month >= 1 && month <= 4):
        console.log("Q.2 Winter");
        document.write("<h4>Q.2 Season: Winter</h4>");
        break;
    case (month >= 5 && month <= 8):
        console.log("Q.2 Summer");
        document.write("<h4>Q.2 Season: Summer</h4>");  
        break;
    case (month >= 9 && month <= 12):
        console.log("Q.2 Monsoon");
        document.write("<h4>Q.2 Season: Monsoon</h4>");
        break;
    default:
        console.log("Q.2 Invalid season");
        document.write("<h4>Q.2 Invalid season</h4>");
        break;
}

// 3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using nested if. (I = PRN/100) Principal Amount (P)
// Interest Rate 
// No. of Years (N)
// (if 3>N<=5 then R is 3 | if 5>N<=8 then R is 5 | if 8>N<=12 then R is 12 | else R is 15)

// I = P * R * N / 100

let p = 10000;
let n = 7;
let r = 0;

if (n > 3 && n <= 5) {
    r = 3;
} else if (n > 5 && n <= 8) {
    r = 5;
} else if (n > 8 && n  <= 12) {
    r = 12;
} else {
    r = 15;
}

let interest = (p * r * n) / 100;
console.log("Q.3 Total interest to pay : Rs. " + interest);
document.write("<h4>Q.3 Total interest to pay : Rs. " + interest + "</h4>");


// 4. Write a JAVASCRIPT Program to check Voting Eligibility.

let age = 21;

if(age >= 18){
    console.log("Q.4 Eligible for voting");
    document.write("<h4>Q.4 Eligible for voting</h4>");
}else{
    console.log("Q.4 Not eligible for voting");
    document.write("<h4>Q.4 Not eligible for voting</h4>");
}


// 5. Write a JAVASCRIPT Program to Classify Age Group.

let ages = 18;

if (ages < 0) {
    console.log("Q.5 Invalid Age: Age cannot be negative.");
    document.write("<h4>Q.5 Invalid Age: Age cannot be negative.</h4>");
} else if(ages < 13){
    console.log("Q.5 Child");
    document.write("<h4>Q.5 Age Group: Child</h4>");
}else if(ages < 20){
    console.log("Q.5 Teenager");
    document.write("<h4>Q.5 Age Group: Teenager</h4>");
}else if(ages < 60){
    console.log("Q.5 Adult");
    document.write("<h4>Q.5 Age Group: Adult</h4>");
}else{
    console.log("Q.5 Senior Citizen");
    document.write("<h4>Q.5 Age Group: Senior Citizen</h4>");
}
