const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    pincode:{
        type:String,
        minLength:6,
        maxLength:6,
        required:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true,
        default:new Date()
    },
    trackingNumber:{
        type:String,
        required:true
    }
});

const UserData = new mongoose.model("UserData",userSchema);
module.exports= UserData;