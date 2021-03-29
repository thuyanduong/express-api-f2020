const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 

console.log("What is process.env.PORT", process.env.PORT)

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})

app.use(express.urlencoded({extended: false})) //allows form requests
app.use(express.json())                        //allows json requests

app.get('/', (req, res) => { 
  res.status(200).json({message: "Hello world!"}) 
})
