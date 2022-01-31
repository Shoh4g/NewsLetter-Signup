//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

//app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,

                }
            }
        ]
    };


    var jsonData = JSON.stringify(data)
    
    https.request(url,options, function(response){

    })

})


app.listen(3000, function(){

    console.log("Server is running on port 3000");
});



//c61f3c60a6f6358c5e2740cc46c8141d-us14

//ab2847b8d1