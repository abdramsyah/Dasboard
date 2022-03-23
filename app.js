const express = require("express")
const route = require('./routes/index')
const app = express()
const port = 3000 || 5000; 



app.use(express.urlencoded({ extended: true }))

app.use(route)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} 👻`)
})