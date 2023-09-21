//same work repeat many time
//iteration [1,2,3,4]
for(var i = 10; i  >= 1; i--) {
console.log("i= ", i );

}
for(var i = 10; i <=100; i++) {
    console.log("i= ", i );
    }

var cities = ["Newyork", "Sans Fransisco", "Dublin", "Texas", "Honolulu" , "Karachi", "Lahore", "Islamabad"];
var cityToCheck = +prompt("Enter Your City Name", "Karachi")
 for(let i = 0; i <= cities.length -1; i++ ) { 
    console.log("i= ", i, cities[i])
    if (cityToCheck === cities[i]) {
        alert("Yes your city is found in list")
    }
 }