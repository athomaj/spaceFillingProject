const dirTree = require('directory-tree');
var fs = require('fs');
const tree = dirTree('/Users/julienathomas/Projects');

console.log(tree)

fs.writeFile('data.json', "data = '", function (err) {
  console.log(err);
  fs.appendFile('data.json', JSON.stringify(tree), function (err) {
    console.log(err);
    fs.appendFile('data.json', "'", function (err) {
      console.log(err);
    });
  });
});
