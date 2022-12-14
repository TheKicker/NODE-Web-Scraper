/*
    Node JS Web Scraper    
    Uses Axios, Express and Cheerio


*/
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')
const app = express()
const port = 3000
var count = 0

const url = process.argv.slice(2) || "https://usadinnerwaredirect.com/collections/the-fiesta-vault"

url.forEach(u=>{
    axios(u)
    .then((result) => {
        const html = result.data
        const c = cheerio.load(html)
        c('.product__title', html).each(function() {
            const title = c(this).text()
            count++
            console.log(`${count} : ${title}`)
        })
    }).catch((err) => {
        console.log(err)
    });
})

app.listen(port, ()=>{
    console.log(`Server is running... port:${port}`)
})

