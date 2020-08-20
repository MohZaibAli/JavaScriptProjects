document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button.red").onclick = function() {
        document.querySelector("h1").style.color = "red";
    };
     document.querySelector("button.blue").onclick = function() {
        document.querySelector("h1").style.color = "blue";
    };
      document.querySelector("button.green").onclick = function() {
        document.querySelector("h1").style.color = "green";
    };
});

document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll("button").forEach( function(button) {

        button.onclick = function () {
            document.querySelector("h1").style.color = button.dataset.color;
        };

    });

});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("select").onchange = function() {
        document.querySelector("h1").style.color = this.value;
    };
});