var ghpages = require('gh-pages');
var path = require('path')
console.log(path.resolve('dist'))

ghpages.publish(path.resolve('dist'), function(err) {
  if (err) {
    console.log('gh pages error')
    console.log(err)
  }
});
