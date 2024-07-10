let key = "b33a8c79b4c149d4811fa54f3c093da4";
let carddata = document.querySelector(".carddata");
let searchbtn = document.getElementById("search-btn");
let inputData = document.getElementById("inputData");

const getdata = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsondata = await res.json();
    console.log(jsondata.articles);

    carddata.innerHTML = "";
    jsondata.articles.forEach(function(article){
        console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    carddata.appendChild(divs);

    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `
    divs.addEventListener("click",function(){
        window.open(article.url);
    })
    })
}
window.addEventListener("load",function(){
    getdata("T20 world cup winner");
})


searchbtn.addEventListener("click",function(){
    let inputtext = inputData.value;
    getdata(inputtext);
})

function navclick(navname){
    
    if(navname == "politics"){
        document.getElementById("politics").style.color="rgb(0, 140, 255)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    if(navname == "csk"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(0, 140, 255)";
        document.getElementById("technology").style.color="white";
    }
    if(navname == "technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="rgb(0, 140, 255)";
    }
    getdata(navname);
}
