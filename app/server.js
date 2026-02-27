const express =require("express");
const app = express();
// Home route
app.get("/", (req, res) => {
res.send("Hello! Node.js app is running using Docker Multi-Stage Build s'.¸•˙7");
});
// Server port
const PORT = 3000;
// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});