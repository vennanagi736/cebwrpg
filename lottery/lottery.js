const pick = document.getElementById("1020");
const resultbtn = document.getElementById("result");

const gifts = ["$100 cash","toy car","chocolate","smartphone","headphone","book","gift vocher"];

pick.addEventListener("click",function(){
    let randomNum = Math.random()*10;
    let drawnNumber = Math.ceil(Math.random()*10);
    console.log(gifts[drawnNumber-1]);
    resultbtn.textContent = drawnNumber;

});