const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
const submitcolor = document.querySelector("#submit");
const randomColors = [
  "#FF5733",
  "#33FFCE",
  "#8D33FF",
  "#FFC300",
  "#2ECC71",
  "#FF33A1",
  "#1F618D",
  "#E74C3C",
  "#DAF7A6",
  "#7D3C98"
];


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target.id);
        if(e.target.id ==="grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id ==="purple"){
            body.style.backgroundColor = e.target.id
        }
        
    })
})
function randomNum(){
    const ans = Math.floor(Math.random() * 10);
    console.log(ans);
    return ans;
}
// const randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

submitcolor.addEventListener("click",function(g){
    console.log(g);
    body.style.backgroundColor = randomColors[randomNum()]
    // console.log(randomNumber);
    
})