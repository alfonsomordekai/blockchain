function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const button = document.querySelector(".btn");
const button2 = document.querySelector(".btnt");

let asdf= getRandomInt(0,3);

function fetcher(){
    fetch("https://api.mocki.io/v2/eb2253a4")


    
    .then( res => res.json() )
    .then( data => {
        
        document.getElementById('qwe').innerHTML =data["statuses"][asdf].asd 

    }
        
        
       )
}


button.addEventListener("click", () => {
    if(document.getElementById('result_form').innerHTML== "........" ){
        document.getElementById('qwe').innerHTML="there is no order";
    }
    
else{
    fetcher();
}
}


);
 
