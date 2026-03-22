const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Health check (important for DevOps credibility)
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Required API
app.get("/student-details", (req, res) => {
    res.json({
        name: "Aswin M",
        roll: "2023BCS0012",
        register: "23bcs12"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
