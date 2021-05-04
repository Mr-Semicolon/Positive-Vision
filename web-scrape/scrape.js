const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://positive-vision-angry.netlify.app/';
let bengan = '';

 rp(url)
  .then(async function(html){
   bengan =await $('p',html).text();
    console.log(bengan);
  })
  .catch(async function(err){
    console.log(err.toString())
  });
