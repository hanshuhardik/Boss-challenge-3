const express=require("express");
const bodyParser=require("body-parser");
const _=require("lodash");

let posts=[];
const content1="my name is hardik and i wanted to study and gettiing rich. "
const content2="this is the boss challenge 3 and i just wanted to complete is by myself";
const con3="The EJS partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error.";
const app=express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  res.render("home",{con1:content1, po:posts});
});
app.get("/about",function(req,res){
res.render("about",{about:content2});
});
app.get("/contact",function(req,res){
  res.render("contact",{contact:con3});
});
app.get("/posts/:topics",function(req,res){
var top=_.lowerCase(req.params.topics);

  for(var i=0;i<posts.length;i++){
    if(_.lowerCase(posts[i].title)===_.lowerCase(req.params.topics)){
    res.render("post",{topic:posts[i].title,content:posts[i].content});
  }
  }


});

app.get("/compose",function(req,res){
  res.render("compose");
});
app.post("/compose",function(req,res){
  const post={
    title:req.body.title,
    content:req.body.post
  };
  posts.push(post);


  res.redirect("/");
});

app.listen("3000",function(){
  console.log("server is running on port 3000");
});
