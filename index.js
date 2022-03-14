const express=require("express");
const app = express();

const mongoose = require("mongoose")


const connect = function(){
return mongoose.connect(" mongodb://127.0.0.1:27017/Banking_System")
}

//create Schema
const UserSchema = mongoose.Schema({
    "firstName": {type:String, required:true},
"lastName":  {type:String, required:true},
"age":  {type:String, required:true},
"email":  {type:String, required:true},
"address":  {type:String, required:true},
"gender":  {type:String, required:true},
})

const MasterAccountSchema = mongoose.Schema({
    
    "name":  {type:String, required:true},
    "address":  {type:String, required:true},
    "IFSC":  {type:String, required:true},
    "MICR":  {type:String, required:true},
    "createdAt":  {type:String, required:true},
    "updatedAt":  {type:String, required:true},

})

const BranchDetailSchema = mongoose.Schema({
    
    "balance":  {type:String, required:true},
    "createdAt":  {type:String, required:true},
    "IFSC":  {type:String, required:true},
    "MICR":  {type:String, required:true},

})

const SavingsAccountSchema = mongoose.Schema({
    
    "account_number":  {type:String, required:true},
    "balance ":  {type:String, required:true},
    "interestRate":  {type:String, required:true},
    "createdAt":  {type:String, required:true},
    "updatedAt":  {type:String, required:true},

})

const FixedAccountSchema = mongoose.Schema({

    "account_number":  {type:String, required:true},
    "balance ":  {type:String, required:true},
    "interestRate":  {type:String, required:true},
    "startDate":  {type:String, required:true},
    "maturityDate":  {type:String, required:true},
    "createdAt":  {type:String, required:true},
    "updatedAt":  {type:String, required:true},

})

//create Model
// const User = mongoose.model("User"UserSchema)

app.listen(5000,function(){
    console.log("listening 5000 port")
})





