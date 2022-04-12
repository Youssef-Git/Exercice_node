const express = require('express');
const router = express.Router();
//const data = require('../data/data.json')
const data = [
    {
      "Id": "0",
      "name": "East",
      "firstname": "Youssef",
      "age": "27"
      },
      
      {
        "Id": "1",
        "name": "Do",
        "firstname": "John",
        "age": "35"
      },
      
      {
        "Id": "2",
        "name": "Johnson",
        "firstname": "Carl",
        "age": "24"
      },

      {
        "Id": "3",
        "name": "Test",
        "firstname": "Tes",
        "age": "24"
      },

      {
        "Id": "4",
        "name": "Testml",
        "firstname": "Tes91",
        "age": "24"
      },

]

JSON.stringify(data)





router.get('/', function(req, res, next) {
  res.render('index', { 'users': data ,'id':9999 });
});


router.get('/:id', function (req, res) {
  const id = req.params.id
  if(id < data.length){
    res.render('index', { 'users': data ,'id':id});
    console.log('true')
    console.log(id)
  }
  else{
    res.render('index', { 'users': data ,'id':9999})
    console.log('false')
  }
})

module.exports = router;
