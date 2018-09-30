var MetalSmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var openHours = require("./hours.json");
var nav = require("./nav.json");

MetalSmith(__dirname)
  .metadata({
    hours: openHours,
    links: nav,
  })
  .source('./src')
  .destination('./output')
  .clean(true)
  .use(markdown())
  .use(layouts({
    default: "base.njk",
    directory: "layouts"}))
  .build(function(err){
    if(err) throw err;
  });