const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) =>
  response.sendFile(__dirname + "/views/index.html")
);
app.get("/about", (request, response) =>
  response.sendFile(__dirname + "/views/about.html")
);
app.get("/works", (request, response) =>
  response.sendFile(__dirname + "/views/works.html")
);
app.get("/gallery", (request, response) =>
  response.sendFile(__dirname + "/views/gallery.html")
);

app.listen(3000, () => console.log("My first app listening on port 3000! "));
