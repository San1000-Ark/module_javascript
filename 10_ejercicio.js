let monday = ["hotdog", "french potatoes", "juice"];
let tuesday = ["burguer", "water"];
let wednesday = ["soup", "lemonade"];
let thursday = ["cookie", "milk"];
let friday = ["sancocho", "guarapo"];
let saturday = ["fish", "champagne"];
let sunday = ["fish", "coco lemonade"];

let day = prompt("Enter the name of the day:");

if (day.toLowerCase() == "monday") {
    alert("The menu day is " + monday);
} else if (day.toLowerCase() == "tuesday") {
    alert("The menu day is " + tuesday);
} else if (day.toLowerCase() == "wednesday") {
    alert("The menu day is " + wednesday);
} else if (day.toLowerCase() == "thursday") {
    alert("The menu day is " + thursday);
} else if (day.toLowerCase() == "friday") {
    alert("The menu day is " + friday);
} else if (day.toLowerCase() == "saturday") {
    alert("The menu day is " + saturday);
} else if (day.toLowerCase() == "sunday") {
    alert("The menu day is " + sunday);
} else {
    alert("That is not a valid day.");
}

//other form and more efficient
/*
let menus = {
    monday: ["hotdog", "french potatoes", "juice"],
    tuesday: ["burguer", "water"],
    wednesday: ["soup", "lemonade"],
    thursday: ["cookie", "milk"],
    friday: ["sancocho", "guarapo"],
    saturday: ["fish", "champagne"],
    sunday: ["fish", "coco lemonade"]
};

let day = prompt("Enter the name of the day:").toLowerCase();

if (menus[day]) {
    alert("The menu day is " + menus[day].join(", "));
} else {
    alert("That is not a valid day.");
}
*/
