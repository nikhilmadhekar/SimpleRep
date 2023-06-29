var exp=require('express');
var bp=require('body-parser');
var path=require("path");

var app=exp();
app.use(exp.static(path.join(__dirname,'public')));
app.use(bp.urlencoded({extended: false})) 
app.listen(9000,function(){
    console.log("server started")
});

app.get('/getform',function(req,res){
    res.sendFile(__dirname+'/login.html');
})
app.post('/getDataTable',function(req,res){
    res.write("<table border=1>");
    res.write("<tr>");
    res.write("<td>"+req.body.nm+"</td>");
    res.write("<td>"+req.body.bdate+"</td>");
    res.write("<td>"+req.body.eid+"</td>");
    res.write("<td>"+req.body.qual+"</td>");
    res.write("</tr>");
    res.write("</table>");
    res.end();
    
})
app.all('*',function(req,res){
    res.send("Invalid URL");
})