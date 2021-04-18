const axios = require('axios');
const fs = require('fs');

//ASYNC FUNCTION

async function getPosts(){
  //fetching the results
const results = await axios.get('http://jsonplaceholder.typicode.com/posts')

//converting to JSON
const posts = JSON.stringify(results.data, null, 2)

//write to file
fs.writeFile(`${__dirname}/result/posts.json`, posts , err => {

  if(err) throw err;
  console.log('post created successfully')

});
}

//CALL THE FUNCTION
getPosts()