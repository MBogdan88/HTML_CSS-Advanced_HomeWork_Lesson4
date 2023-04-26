const img = document.querySelector("#wallpaper");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", ()=>{
    img.src = "./img/horseshoe.jpg"
});
btn2.addEventListener("click", ()=>{
     img.src = "./img/lake.jpg"
});
btn3.addEventListener("click", ()=>{
    img.src = "./img/woods.jpg"
});
