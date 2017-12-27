const express = require('express')
const app = express()
app.get('/', () => {
  res.send('hi babe1!')
})

app.listen(3000, () => console.log('Server started on port 3000'))
