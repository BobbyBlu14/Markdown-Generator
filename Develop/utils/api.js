const axios = require("axios");
require('dotenv').config();

const api = { 
  getUser(github){
  const queryUrl = ( `https://api.github.com/users/${github}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
  return axios.get(queryUrl).catch(
    err => {
      console.log("user not found");
    process.exit(1);
  });
}
};
module.exports = api;

