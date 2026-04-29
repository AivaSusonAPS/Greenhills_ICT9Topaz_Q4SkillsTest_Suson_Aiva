//Enter password & username function

let counter = 3;

function enter_credentials() {

let username = document.getElementById('input1').value;
let password = document.getElementById('input2').value;
let output = document.getElementById('output');
let truepassword = "12345"


if (username === "" || password === "") {
    document.getElementById('output').innerHTML = ("Please fill in the blanks.");
}
else if (username === "Aiva Suson" && password === "12345") {
    window.alert("You are now logged in!");
 }
else if (password !== truepassword) {
    while (counter > 0) {
         window.alert("Number of tries left: " + counter);
            counter -= 1;
        break;
    }
    if (counter <= 0) {
        output.innerHTML = "You have no more tries left.";
        document.getElementById("button").disabled = true;
    } else if (counter > 0) {
        output.innerHTML = "Incorrect credentials.";
    }
 }
}




// Sources:
// Break: https://www.w3schools.com/js/js_break.asp

     
