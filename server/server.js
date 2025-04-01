require("dotenv").config({path: "./.env"});
const app = require("./src/app.js");


app.listen(3000, ()=> {
    console.log('server is running on http://localhost:3000');
});