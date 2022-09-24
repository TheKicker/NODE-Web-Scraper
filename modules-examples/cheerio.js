const cheerio = require('cheerio');
const htmlDocument = cheerio.load('<h2 class="title">Hello world</h2>');

htmlDocument('h2.title').text('Hello there!');
htmlDocument('h2').addClass('welcome');

htmlDocument.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

/*

This script loads a line of HTML with an h2
It then changes the title of the h2, to Hello there!
After, it appends a class of welcome to the element

*/