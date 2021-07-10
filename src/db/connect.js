const mongoose = require ("mongoose");
const UserData = require("../model/schema");
const Data=require("../../data");
mongoose.connect("mongodb://localhost:27017/dataFlush",{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    // UserData.insertMany(Data).then(()=>{
    //     console.log("Data created");
    // });
    console.log(`connection succesful [status:good]`);
}).catch((e)=>{
    console.log(`connnecion error ${e}`);
})
