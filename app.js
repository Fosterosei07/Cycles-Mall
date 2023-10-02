const express = require ('express');
const dotEnv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');

dotEnv.config()

const port =process.env.PORT || 7000

const app = express()

// setting view engine
app.set('view engine','ejs');
app.use(expressLayouts);

// serving static files


app.get("/home", (req, res) => {
    res.send('GOD IS WORKING')
})


app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
    
})