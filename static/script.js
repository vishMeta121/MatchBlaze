document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("matchForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        getMatch();
    });
});

function getMatch() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    fetch("/get_match", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, address, city, state })
    })
    .then(response => response.json())
    .then(data => {
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <strong>Name:</strong> ${data.name}<br>
            <strong>Address:</strong> ${data.address}<br>
            <strong>City:</strong> ${data.city}<br>
            <strong>State:</strong> ${data.state}
        `;
        resultDiv.style.display = "block";
    })
    .catch(error => console.error("Error:", error));
}
