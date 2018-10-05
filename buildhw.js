var MetalSmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

MetalSmith(__dirname)
  .source('./hwsrc')
  .destination('./hwoutput')
  .clean(true)
  .use(markdown())
  .build(function(err){
    if(err) throw err;
  });