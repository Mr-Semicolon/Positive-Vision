const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://positive-vision-angry.netlify.app/';
let bengan = '';

rp(url)
  .then(function(html){
   bengan = $('p',html).text();
    console.log(bengan);
  })
  .catch(function(err){
    console.log(err.toString())
  });
