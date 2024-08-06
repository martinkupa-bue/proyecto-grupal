
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola soy Juan! Esta es nuestra primera pagina web')
})

app.get("/login", (req, res) => res.send("Aqui estara el login"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
