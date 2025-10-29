// mettre le endpoint de l'exo 1 ici
const express= require("express");
// const router = require("./index.js");
//express.router
// ...
// app.use("/index", index);


app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(404).json({
      message: "hey c'est Vaness",
      data: { username: "Vaness", age: 30, look: "gorgeous" },
    });
});
module.exports = router;


