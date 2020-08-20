function clicktochange() {
    if (document.querySelector("h1").innerHTML === "Hello !") {
        document.querySelector("h1").innerHTML = "Good Bye !";
    }
    else {
        document.querySelector("h1").innerHTML = "Hello !"
    }

}

function clicktotickle() {
    const heading = document.querySelector("h1")
    if (heading.innerHTML === "Hello !") {
        heading.innerHTML = "Good Bye !";
    } else {
        heading.innerHTML = "Hello !"
    }
}

document.addEventListener("DOMContentLoaded", function (){
    document.querySelector(".ctt").onclick = clicktotickle;
});