document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function () {
       let name = document.querySelector("input.name").value;
       let password =  document.querySelector("input.password").value
        alert(`Hello ${name}, Your Login Password is ${password}`)
    }
});
