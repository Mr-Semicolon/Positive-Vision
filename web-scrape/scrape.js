/*const cheerio = require('cheerio');

const request = require('request');
const linkk = 'https://twitter.com/ksi'
let itemList = [];
request('https://twitter.com/ksi', function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
    
    console.log(itemElements);
    /*for (let i = 0; i < 10; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let title = item.find('.css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0').text().trim();
      
      // .attr() gets and sets attributes
     
      
      itemList.push({
        title
      });
    }
  });
  
console.log(itemList);
*/