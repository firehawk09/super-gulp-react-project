var $ = require('jquery');

var APIUrl = 'https://api.parse.com/1/classes/Hotels'

$.ajax({
  url: APIUrl,
  type: 'get',
  headers: {
  'X-parse-Application-Id': 'h47rRbYRHC3RZwkzwCjbqyKOC32nhw9vMEB1SJFc',
  'X-parse-REST-API-Key': 'VejUVkRmjcvqdG5rWqMdJj6km61aormnUIn3jQXU'}
}).then(function(responseData){
  console.log('hello guys!!!');
  console.log(responseData.results[0]);
  console.log('hello guys!!!');
})