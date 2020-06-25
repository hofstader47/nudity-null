const express=require('express');
const router=require('./middleware.js');
const routes1=require('./routes/routeposts.js')
const app=express();
const middle=(req,res,next)=>{console.log("request received for"+req.url);next();};
app.use(middle);
app.use("/",router.route);
app.listen(process.env.PORT || 4001,()=>console.log("Got a call"));