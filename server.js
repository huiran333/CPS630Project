var express = require('express');
var app = express();

app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 
const { MongoClient } = require("mongodb");
const { isStringObject } = require('util/types');
const uri = "mongodb+srv://huirantang:ZOjdqPpvj1vkeIUQ@cluster0.wtagqq9.mongodb.net"

const client = new MongoClient(uri);


async function sumbitLogin(){
      
  try{
    const db = client.db('CPS630');
    const coll = db.collection('Project');

    const data={
    username:"user",
    password:"123"
    }
    const query = await coll.insertOne(data);
  }finally{
    await client.close();
  }
}
sumbitLogin().catch(console.dir);

app.listen(3000);

