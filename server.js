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





// DELETE





// UPDATE





// CREATE





// EDIT






// SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', { 
        data: pokedex[req.params.id] 
    });
});







app.listen(port, () => {
    console.log(`Listening on port`, port)
});