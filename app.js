const express = require ('express');
const dotEnv = require('dotenv');

dotEnv.config()

const port =process.env.PORT || 7000

const app = express()

// app.get("/", (req, res) => {
//     res.send('its Working')
// })

// app.get("/home", (req, res) => {
//     res.send('GOD IS WORKING')
// })

app.get("/register", (req, res) => {
    res.send('GOD IS GREAT')
})

app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
    
})