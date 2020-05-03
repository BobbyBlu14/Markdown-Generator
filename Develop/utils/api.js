const axios = require("axios");
require('dotenv')

const getUser = (get ) => {
  const queryUrl ( = `https://api.github.com/users/${github}?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`;
  return axios({  
    const getUser() = (get (queryUrl)).then(function (response) {
    const { html_url, login, avatar_url, repos_url, email, name, bio } = response.data;
    const gitInfo = {
        "html_url": html_url,
        "login": login,
        "avatar_url": avatar_url,
        "repos_url": repos_url,
        "email": email,
        "name": name,
        "bio": bio
    };
    console.log(response.data);
    console.log(gitUser);
    let newinfo = JSON.stringify(gitInfo);
    console.log(newinfo);

})
}; 



module.exports = apiCall;

