const mongoose = require('mongoose');
const url = "mongodb+srv://testheroku:t1squYvynBBqovPZ@cluster0.5fs53.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
