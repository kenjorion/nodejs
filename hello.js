////console.log("Hello World"); 
//
//const express = require('express')
//const app = express()
//
//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})
//
//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!')
//}) 

// console.log('Hello World');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Via une recherche google, on découvre qu'il faut ajouter le
// middleware "bodyparser" pour extraire le contenu envoyé dans
// une requête POST. Source: https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application
const bodyParser = require('body-parser')

// Le contenu est attendu au format JSON => utiliser le middleware
// bodyParser.json documenté ici: https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/chat', (req, res) => {
    const message = req.body.msg
    console.log('body', typeof req.body, req.body.msg)
    if (message === 'ville') {
        res.send('Nous sommes à Paris')
    } else if (message === 'météo') {
        res.send('Il fait beau')
    }
})

/*
// autre manière de définir ce point d'entrée:
app.get('/', function (req, res) {
    res.send('Hello World!');
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))