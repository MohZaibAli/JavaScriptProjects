document.addEventListener("DOMContentLoaded", function() {

    // By Default Submit button Is Disabled
    document.querySelector(".submit").disabled = true;

    document.querySelector(".task").onkeyup = function() {
        document.querySelector(".submit").disabled = document.querySelector(".task").value.length <= 0;
    };

    document.querySelector("form").onsubmit = function () {
        const task = document.querySelector(".task").value;

        const li = document.createElement("li");
        li.innerHTML = task;

        document.querySelector(".tasks").append(li);

        document.querySelector(".task").value = "";
        document.querySelector(".submit").disabled = true;

        // Stop From Submitting Form
        return false;
    };
});