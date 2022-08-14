const currentYear=2022; //define current year
const howOld = (age,year) => {
const yearOfBirth=currentYear-age; 
const difference = year-yearOfBirth;
if (year>currentYear) {
  return `You will be ${difference} in the year ${year}`;
}
if (difference < 0) {
  return `The year ${year} was ${difference} years before you were born`;
}
else (difference > 0) 
  {return `You were ${difference} in the year ${year}`;}
}
console.log(howOld(45,2062));



const howOld1 = (age,year) => {
let dateToday = new Date();
let currentYear = dateToday.getFullYear();
const yearDifference = year-currentYear;
const newAge = age+yearDifference;
if (newAge>age) {
 return `You will be ${newAge} in the year ${year}`;
}
else if (newAge < 0) { 
  return `The year ${year} was ${newAge}years before you were born`;
}
else {
  return `You were ${newAge} in the year ${year}`;
}}
console.log(howOld1(18,2000));
