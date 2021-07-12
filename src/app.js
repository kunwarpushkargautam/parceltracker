const express = require("express"),
  mongoose = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();
require("./db/connect");
const UserData = require("./model/schema");
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static("public"));
const static_path = path.join(__dirname, "../public");
app.get("/adminpanel",(req,res)=>{
  console.log(static_path);
  res.sendFile(static_path +'/admin.html');
})
app.get("/UserData/:searchvalue", (req, res) => {
  const searchtext = req.params.searchvalue;

  console.log(searchtext);
  UserData.find({
    $or: [
      { name:searchtext.toLocaleLowerCase()},
      { pincode:searchtext.toLocaleLowerCase()},
    ],
  }).then((searchData) => res.send(searchData));
});

app.post("/createdata", (req, res) => {
  const {name,mobile,city,pincode,state,trackNumber,date}=req.body;
  const newData = new UserData({
    name: name,
    mobile: mobile,
    city: city,
    pincode: pincode,
    state:state,
    trackingNumber: trackNumber,
    date:date
  });
  newData.save().then((respose)=>{
    res.send({msg:"data created"});
  })
});

app.listen(port, () => {
  console.log(`server running ${port}`);
});
