//setup server
const express = require('express')
const app = express()
//bodyparser setup 
const bodyParser = require('body-parser');
const { regexpToText } = require('nodemon/lib/utils');
const getDate = require('./date');
//import { response } from 'express';
const date = require(__dirname+"/date.js")
//setting up ejs
//>>npm i ejs
app.set('view engine','ejs');

//created a public folder to allow express to serve css files
app.use(express.static("public"))


//to make ejs work, you need to create a views folder, all in lower case, in your repo. and you need to create a new ****.ejs file
//in the html file you have to place a marker for ejs to know where to drop the variables/output that you design. 
//the marker is <%=EJS%>
//to push into the ejs file, you need to use res.render("path",json)

app.use(bodyParser.urlencoded({extended:true}))

let newItems = []
let workItems = []

console.log(date.getDate())
console.log(date.getDay())

app.get("/",function(req,res){
    getDate()
    res.render("list",{
        ListTitle:date.getDate(),
        newListItem: newItems
    })
})


app.get("/work",function(req,res){
    res.render("list",{
        ListTitle:"Work List",
        newListItem: workItems
    })
})

app.get("/about",function(req,res){
    res.render("about.ejs")
})



app.post("/", function(req,res){
    console.log(req.body.newItem)
    console.log(req.body)

    if (req.body.button === "Work") {
        workItems.push(req.body.newItem)
        res.redirect("/work")
    } else {
        newItems.push(req.body.newItem)
        res.redirect("/")
    }

})


app.listen(8080,function() {
    console.log("Server is running on port 8080")
})