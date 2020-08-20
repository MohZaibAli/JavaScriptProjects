document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function() {
        fetch("https://api.exchangeratesapi.io/latest?base=USD/")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const currency = document.querySelector(".currency").value.toUpperCase();
                const rate = data.rates[currency];
                if (rate !== undefined) {
                    document.querySelector(".result").innerHTML = `1 USD is equivalent to ${rate.toFixed(3)}(${rate}) ${currency}s`;
                } else {
                    document.querySelector(".result").innerHTML = "Invalid Currency.";
                }
                return false
            })
            .catch(error => {
                console.log("Error:", error)
            }
    )};
});