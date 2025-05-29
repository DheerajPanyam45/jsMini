const body = document.getElementsByTagName("body")[0];
// body.style.backgroundColor = "lightblue";

function setColor(name){
    body.style.backgroundColor = name;
    // alert("Background color set to: " + name);
}
// setcolor("lightblue");
function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red} , ${green} , ${blue})`
    body.style.backgroundColor = color;
    // alert("R G B values are: " + color);
}
