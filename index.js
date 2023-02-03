const express = require("express");
const cors = require('cors');
const GetNonceAW = require("./model/getNonce");

const port = 3030;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  //  sets the header of the response to the user and the type of response that you would be sending back
  res.setHeader('Content-Type', 'text/html');
  res.write("<html>");
  res.write("<head>");
  res.write(`<title>decode nonce alien worlds : ${process.pid}</title>`);
  res.write("</head>");
  res.write("<body>");
  res.write(`<h1>decode nonce alien worlds</h1>`);
  res.write("</body>");
  res.write("<html>");
  res.end();
});

app.post("/mine", GetNonceAW, (req, res) => {
  res.status(200).send(req.nonce);
});
// server listening
app.listen(port, () => {
  console.log(`api-nonce running on port ${port}`);
});
