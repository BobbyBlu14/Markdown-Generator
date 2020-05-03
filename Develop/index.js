const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios")

const questions = [
    {
        type: "input",
        name: "github",
        message: "Please type your github username:"

    },
    {
        type: "input",
        name: "title",
        message: "Please type the name of your project:"

    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:"

    },

    {
        type: "input",
        name: "toC",
        message: "Please describe your table of contents"

    },

    {
        type: "list",
        name: "license",
        message: "Please type select the liscense you used for your project :",
        choices: ["",]
    },
    {
        type: "input",
        name: "installation",
        message: "what you need to install this project:",
        defualt: "npm i"

    },
    {
        type: "input",
        name: "usage",
        message: "If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.?:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Let people know how they can contribute into your project. A contributing guideline will be a big plus.:"
    },

    {
        type: "input",
        name: "tests",
        message: " Describe and show how to run the tests with code examples:"

    },
    {
        type: "input",
        name: "questions",
        message: " Describe and show how to run the tests with code examples:"

    }

]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {

       const queryUrl =
            getUser(inquirerResponses.github)
            .then(({ data }) => {
                writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));
            })
            
            get(
                `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
            )
            
            init();
            
            const writeFileAsync = util.promisify(fs.writeFile);
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is your GitHub username?",
                        name: "name",
                    },
                ])
                .then(function ({ answers }) {
                    const queryUrl = `https://api.github.com/users/${name}`
                   
        }))
    }
      

/*this is how your get function would look inside your api call to include the client secret and client id

// writeFileAsync("README.md", newinfo + "\n", function(error){
//    if(error){
//        console.log(error);
//    }else{
//        console.log("click on the new file to see your favorite state");
//    }
// })
})
    })
.then(function(name){
        const queryUrl2 = `https://api.github.com/users/${name}/repos?per_page=100`;
        axios.get(queryUrl2).then(function(res) {
          const repoNames = res.data.map(function(repo) {
            return repo.name;
          });
          const repoNamesStr = repoNames.join("\n");
          fs.writeFile("repos.txt", repoNamesStr, function(err) {
            if (err) {
              throw err;
            }
            console.log(`Saved ${repoNames.length} repos`);
          });
        });
      });


constCreateRead
import apiCAll from "./api";

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      const repoNamesStr = repoNames.join("\n");
      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }
        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });

const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


    for (let file of files) {
      const fileStr = await readFileAsync(file, "utf8");


    await writeFileAsync(
      "combined.json",
      JSON.stringify(sorted, null, 2),
      "utf8"
    );
    -----
    const Letter = require("../lib/Letter");

describe("Letter class", () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    expect(new Letter("?").visible).toBe(true);
  });

  it("toString returns _ for letters", () => {
    expect(new Letter("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});
    
*/