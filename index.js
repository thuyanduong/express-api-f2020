const express = require("express");
const app = express();
const {pool} = require('./db/db')

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})

app.use(express.urlencoded({extended: false})) //allows form requests
app.use(express.json())                        //allows json requests

app.get('/', (req, res) => { 
  res.status(200).json({message: "Hello world!"}) 
})

app.get('/users', (req, res)=>{
  pool.query("SELECT * FROM users ORDER BY id")
    .then(results => {
      res.status(200).json(results.rows)
    }).catch(err => {
      res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  pool.query("SELECT * FROM users WHERE id = $1;", [id])
    .then(results => {
      if(results.rows.length === 0){
        res.status(404).send("User not found")
      } else {
        res.status(200).json(results.rows[0])
      }
    }).catch(err => {
      console.log(err)
      res.status(500).send()
    })
})