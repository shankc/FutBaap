var express = require('express');
var cors = require('cors');
var app = express();
var MongoClient1 = require('mongodb').MongoClient; // client for the first da
var MongoClient2=require('mongodb').MongoClient; // accessing the second database
var url = 'mongodb://localhost:27017/PLTeams';
var url2='mongodb://localhost:27017/TeamSquads';

var TempTeams=[];
var Teams=[];
var count =0;
app.use(cors());
app.get('/api/EPLTeams',function(req,res){
MongoClient1.connect(url,function(err,db){
if(!err)
{
	console.log("Connected!");
   var DataItems = db.collection('TopTenTeams');
   DataItems.find().toArray(function(err,result){
   	if(err)
   	{
   		console.log(error);
   	}
   	else
   	{
   		console.log(result.length);
   		res.json(result);

   	}
 db.close();
   });

}
else
{
	res.send(err);
	db.close();

} // collection function running multiple times... 

});

});


app.get('/api/GetPlayers',function(req,res){
  
MongoClient2.connect(url2,function(err,db){
if(!err)
{
	console.log("Connected! again");
  var Data = db.collection('Squads'); 
  Data.find().toArray(function(err,result){
  	if(err)
  	{
  		console.log(err);
  	}
  	else
  	{
  		console.log(result.length);
  		res.json(result);
  	}
  	db.close();

  });

}
else
{
res.send(err);

}

});
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if ('OPTIONS' == req.method){
        return res.send(200);
    }
   next();
});

 app.listen(8080);
    console.log("App listening on port 8080");