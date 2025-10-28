//j'importe mon projet express
const express = require("express");

//creation de l'application
const app = express();

//get est une methode de l'ojet app/ app qu'one st allé cherché dans js
app.get('/:id', (req, res) => {
    const id = req.params.id;
  if ("message" % 2 === 0) {
    res.send("pair");
  } else {
    res.send("impair");
  }
});

//démarrer mon serveur sur le port 3000
app.listen(3000, () => {
  console.log(
    "ce message est pour m informer que mon serveur est bien lancé sur le port 3000"
  );
});

app.post("/toto", (req, res) => {
  res.send("super Youpie je suis en post ");
});

app.patch("/toto", (req, res) => {
  res.send("super Youpie je suis en patch ");
});

app.put("/toto", (req, res) => {
  res.send("super Youpie je suis en put ");
});
