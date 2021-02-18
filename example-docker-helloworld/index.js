const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Greetings from a Docker container deployed in Heroku on 2021-02-18 15:51 !'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
