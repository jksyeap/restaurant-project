/* A file to rendering Nobel Prize information from JSON into 
HTML with *nunjucks*. 

Student edition for use in homework assignments.

*/

const nunjucks = require('nunjucks');
// The next line imports the prize.json file into JavaScript
// as a JavaScript object which contains arrays and more objects...
const prizesJSON = require('./prize.json');
const fs = require('fs'); // The file system module

// You will pick different topics and date ranges based on your
// interests and the contents of the prize.json file
let catDates = [{
        topic: "physics",
        start: 1926,
        end: 1954,
        title: "Physics",
        fname: "physics.html"
    },
    {
        topic: "chemistry",
        start: 1936,
        end: 1964,
        title: "Chemistry",
        fname: "chemistry.html"
    },
    {
        topic: "economics",
        start: 1940,
        end: 1980,
        title: "Economics",
        fname: "economics.html"
    },
    {
        topic: "medicine",
        start: 1990,
        end: 2010,
        title: "Medicine",
        fname: "medicine.html"
    }];


nunjucks.configure({
    autoescape: true
});
nunjucks.configure('views', {
    autoescape: true
});

// Process prizes.json to get only information of interest
let prizeArray = prizesJSON.prizes;
for (let catDate of catDates) {
    
    // Create filtered versions of the prize array for rendering.
    // Recommend using JavaScript array methods like *filter*, etc...
    let prizeInfoArray = prizesJSON.prizes.filter(function(prize) {
        if(parseInt(prize.year,10) >= catDate.start && parseInt(prize.year,10) <= catDate.end && prize.category === catDate.topic)
        {
            return true;
        }
        return false;
    });
    //console.log(prizeInfo);
    // Combine needed information for the template into a single
    // JavaScript object, suppose it is called prizeInfo and
    // pass it over to nunjucks
    let prizeInfo = {"prizes":prizeInfoArray,
                     "category":catDate.title,
                     "start":catDate.start,
                     "end":catDate.end};
                     
    let outString = nunjucks.render('prizes.njk', prizeInfo);
    
    // Write the file
    fs.writeFileSync('./output/' + catDate.fname, outString);
    console.log("Wrote file " + catDate.fname); // For debugging
}