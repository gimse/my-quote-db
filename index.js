const fs = require('fs');
var express = require('express')
const random = require('random')

let rawdata = fs.readFileSync('quotes.json');
let quotes = JSON.parse(rawdata);

app = express()
port = process.env.PORT || 43444

app.get('/', (req, res) => {
    res.send('Hello. This means that the my-quote-db is avaliable')
})

app.get('/api/v1/random_quote', (req, res) => {
    console.log('INFO: Lokking for quote')
    console.log(req.query.max_length)
    if (!req.query.max_length){
        req.query.max_length=1000000000
    }
    quotes_selected=[]
    quotes.forEach((quote)=>{
        if(quote.Quote.length<=req.query.max_length){
            if (req.query.category){
                if(quote.Category.includes(req.query.category)){
                    quotes_selected.push(quote)
                }
            }else{
                quotes_selected.push(quote)
            }
            
        }

    })
    if(quotes_selected.length==0){
        return res.status(400).send({message: 'No quotes in category found!'});
    }
    quote=quotes_selected[random.int(0, quotes_selected.length-1)]
 
    if (quote.Author.split(',').length>1){
        quote.Author=quote.Author.split(',')[0]
    }
    console.log("INFO: Returned quote by "+quote.Author)
    delete quote.Tags
    res.send(quote)
})
app.get('/api/v1/categories', (req, res) => {
    categories=[]
    quotes.forEach((quote)=>{
        if(!categories.includes(quote.Category)){
            categories.push(quote.Category)
        }
    })

    res.send(categories)
})

app.listen(port,'0.0.0.0');

console.log('INFO: my-qoute-db API server started on: ' + port);