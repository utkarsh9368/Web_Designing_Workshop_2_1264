window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "0.7s ease";

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.style.zIndex = "1000";
        navbar.style.background = "#131921";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

    }else{

        navbar.style.boxShadow = "none";

    }

});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("focus", () => {

    searchInput.style.boxShadow = "0 0 10px orange";

});

searchInput.addEventListener("blur", () => {

    searchInput.style.boxShadow = "none";

});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-10px)";
        box.style.transition = "0.4s";
        box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0px)";
        box.style.boxShadow = "none";

    });

});

const heroMsg = document.querySelector(".hero-msg");

heroMsg.style.opacity = "0";
heroMsg.style.transform = "translateY(50px)";

setTimeout(() => {

    heroMsg.style.opacity = "1";
    heroMsg.style.transform = "translateY(0px)";
    heroMsg.style.transition = "1s";

},500);

const typingText = document.querySelector(".panel-deals");

const text = "⚡ Electronics Deals Live";

typingText.innerHTML = "";

let index = 0;

function typeEffect(){

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,80);

    }

}

typeEffect();

const backTop = document.querySelector(".foot-panel1");

backTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const revealElements = document.querySelectorAll(".box");

window.addEventListener("scroll", revealFunction);

function revealFunction(){

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";
            element.style.transition = "1s";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(100px)";

});

setTimeout(() => {

    const popup = document.createElement("div");

    popup.innerHTML = `
        <h3>🔥 Today's Offer</h3>
        <p>Up to 50% OFF on Electronics</p>
    `;

    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.background = "white";
    popup.style.padding = "20px";
    popup.style.borderRadius = "15px";
    popup.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    popup.style.zIndex = "99999";

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.remove();

    },5000);

},4000);