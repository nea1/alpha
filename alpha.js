const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('this does very little...')
})

app.listen(8080, () => console.log('Alpha app listening on port 8080!'))

