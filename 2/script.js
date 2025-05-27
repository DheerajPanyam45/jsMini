const input = document.getElementById("inputText");

function reverseString(str) {
    return str.split("").reverse().join("");
}




function check(){
    const value = input.value;
    const reversedValue = reverseString(value);
    // alert("The value entered is ->"+value);
    // alert("the reversed string is "+reversedValue);
    if (value === reversedValue) {
        alert("The string is a palindrome.");
    } else {
        alert("The string is not a palindrome.");
    }
    input.value = "";
}




input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        check();
        reverse();
    }
});