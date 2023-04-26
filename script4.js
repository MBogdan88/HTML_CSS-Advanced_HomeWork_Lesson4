const img = document.querySelectorAll("img");
let currentImageIndex = 0;

showBtn.addEventListener("click", ()=>{
    for (let i = 0; i < img.length; i++) {
        const imgSrc = document.querySelector("#imgSrc");
        const url = document.createElement("div");
        url.innerHTML = img[i].src;
        imgSrc.appendChild(url);
    };

    let interval = setInterval( ()=> {
        if (currentImageIndex === img.length) {
            clearInterval(interval);
            return;
        }
        img[currentImageIndex].style.border = "3px solid red";
        currentImageIndex++;
    }, 1000);

});



