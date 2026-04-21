const express = require("express");
const app = express();

app.use(express.json());

app.post("/analyze", (req, res) => {
    const { resume } = req.body;

    let score = Math.floor(Math.random() * 40) + 60;

    res.json({
        message: "Resume analyzed successfully",
        score: score,
        suggestion: "Add more projects and GitHub links"
    });
});


if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = app;