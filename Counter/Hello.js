let counter = 0;
function count() {
    counter++;
    document.querySelector("h1").innerHTML = counter;
    if (counter % 10 === 0) {
        alert(`Count Is Now ${counter}`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
        document.querySelector("#count").onclick = count;
});
