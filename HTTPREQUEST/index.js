import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });
  app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><br><p>I am Navneet</p>");
  });
  app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><br><p>991880000</p>");
  });

app.listen(port, () => {
    console.log(`Server is running on the port ${port}.`);
});