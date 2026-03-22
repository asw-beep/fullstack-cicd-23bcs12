const API_URL = "http://localhost:5000/student-details";
 
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").innerText     = data.name;
        document.getElementById("roll").innerText     = data.roll;
        document.getElementById("register").innerText = data.register;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
