const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');


const app = express();
/* fro knowing Server Is working or not
app.get('/',(req,res) => {
  res.send("<h1>App Is Running</h1>");
});
*/
app.use(cors());
app.use(express.static('public'));
const PORT = process.env.PORT || 4444;

app.listen(PORT, ()=> {
  console.log("APP is running on PORT   http://localhost:" + PORT);
});

