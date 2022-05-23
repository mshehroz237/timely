//creating a varibale to store current time in a certain format
var todayDate = moment().format('dddd, MMM Do YYYY');
//inserting current date in currentDay class in html
$("#currentDay").html(todayDate);
// selecting textarea input feilds into inputClrs
var inputClrs = document.querySelectorAll("textarea");
//creating a for loop to run until no time time slots left
for(var i = 0; i < inputClrs.length; i++ ){
    //comparing if the time slot time is same as current time
    if(inputClrs[i].id === moment().hours()){
        //assigning it colors based on time
        inputClrs[i].classList.add("present");
    } 
    //comparing if the time slot time is same as current time
    if(inputClrs[i].id < moment().hours()){
    //assigning it colors based on time
        inputClrs[i].classList.add("past");
    }
    //comparing if the time slot time is same as current time
    if(inputClrs[i].id > moment().hours()){
    //assigning it colors based on time
        inputClrs[i].classList.add("future");
    }
}
//creating a function to run once a webpage is loaded
window.onload=function(){
    //selecting save button and calling event listener of click on it
    document.querySelector(".localBtn").addEventListener("click", function(){
        // storing value of textarea in the new created variable
    var input_serialized = JSON.stringify(document.querySelector("textarea").value());
    //setting up local storage with a key of text
        localStorage.setItem("text", input_serialized);  
        //getting local storage and console logging it
    console.log(localStorage.getItem("text"));
    });
}


