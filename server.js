const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// If no API routes are hit, send the React app
app.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

/* app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); */

app.listen(PORT, ()=> {
    console.log(`Server is lstening a http/localhost:${PORT}`);
});