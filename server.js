const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname,'public')));
app.use('/', function(req,res)
{
res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(8000);
console.log("server running on port 8000");