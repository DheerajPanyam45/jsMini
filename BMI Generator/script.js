const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault() 

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const statement = document.querySelector("#statement");


    if(height === '' || height<=0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    

     else if(weight === '' || weight<=0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }


    else{
            const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi} </span>`
         if (bmi<18.6){
        statement.innerHTML = `<strong>You are underweight.</strong>`
    }
    else if (bmi>=18.6 && bmi<=24.9){
        statement.innerHTML = `<strong>You are in the normal range.</strong>`
        }
        else {
            statement.innerHTML = `<strong>You are overweight.</strong>`
        }
        }
   
}
);
