const express = require('express')
const app = express()

app.use((req, res) => {
  res.json({ message: 'Ola' })
})

app.listen(3000)