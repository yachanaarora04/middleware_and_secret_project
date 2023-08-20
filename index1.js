import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

// body parser
// to access the contents typed by user
app.use(bodyParser.urlencoded({extended:true}));
// home page is index.html 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// console logs the request made by user.
app.post("/submit",(req,res)=>
{
  console.log(req.body);
});

// listening on port 3000 hosted locally
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
