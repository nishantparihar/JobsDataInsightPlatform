const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

app.use(cors());

app.get('/api/basictable', (req, res)=>{
    
})

app.listen(3000);