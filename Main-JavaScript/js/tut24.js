console.log("Hey Welcome to tut24.js In this tut we can learn --Date Objects--");

let today = new Date();
console.log(typeof today);

let otherDate = new Date('03-23-2024 04:54:05');
// otherDate = new Date('March 23 1997');
// otherDate = new Date('03/23/1997');

console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMonth();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getHours();
a = otherDate.getMilliseconds();

console.log(a);


// ----set Date Day Time Months Seconds----

otherDate.setDate(22);
otherDate.setMonth(0);
otherDate.setHours(1);
otherDate.setMinutes(2);
otherDate.setSeconds(3);
otherDate.setFullYear(2024);

console.log(otherDate);