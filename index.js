const express = require('express')
const app = express()
const port = 3000

app.get('/series', (req, res) => {
  res.send('I love Futurama!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})