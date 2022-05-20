const express = require("express");
const methodOverride = require("method-override");
const pokedex = require('./models/pokemon');
const app = express();
const port = 3000;



// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// INDEX
app.get('/pokedex', (req, res) => {
    res.render('index.ejs', { 
        data: pokedex 
    });
});

// NEW
app.get('/pokedex/new', (req, res) => {
    res.render('new.ejs', {
        data: pokedex
    })
  });

// DELETE
app.delete("/pokedex/:indexOfPokedexArray", (req, res) => {
    pokedex.splice(req.params.indexOfPokedexArray, 1) 
    res.redirect("/pokedex")
  });

// UPDATE
app.put("/pokedex/:indexOfPokedexArray", (req, res) => {
    pokedex[req.params.indexOfPokedexArray] = req.body 
    res.redirect("/pokedex")
  });

// CREATE
app.post("/pokedex", (req, res) => {
    pokedex.unshift(req.body)
    res.redirect("/pokedex") 
  });

// EDIT
app.get("/pokedex/:indexOfPokedexArray/edit", (req, res) => {
    res.render(
      "edit.ejs", {
        data: pokedex[req.params.indexOfPokedexArray],
        index: req.params.indexOfPokedexArray, 
      });
  });

// SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', { 
        data: pokedex[req.params.id] 
    });
});







app.listen(port, () => {
    console.log(`Listening on port`, port)
});