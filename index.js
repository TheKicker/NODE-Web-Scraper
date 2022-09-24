/*
    Node JS Web Scraper    
    Uses Axios, Express and Cheerio


*/
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')
const app = express()
const port = 3000

const url = "https://usadinnerwaredirect.com/collections/the-fiesta-vault"

axios(url)
    .then((result) => {
        console.log(`URL: ${url}`)
        console.log(`STATUS: ${result.status} - ${result.statusText}`)
        const header = result.headers
        const html = result.data
        const c = cheerio.load(html)
        c('.product__title', html).each(function() {
            const title = c(this).text()
            console.log(title)
        })
        console.log(`HEADER: ${JSON.stringify(header)}`)
    }).catch((err) => {
        console.log(err)
    });

app.listen(port, ()=>{
    console.log(`Server is running... port:${port}`)
})

