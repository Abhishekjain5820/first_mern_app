const express=require('express')
const app=express();
const mongoose=require('mongoose');
const UserModel=require('./models/Users')

const cors=require('cors')

//for parsing the json data
app.use(express.json());

//for connecting backend and frontend
app.use(cors());

mongoose.connect("mongodb+srv://abhishekjain123:abhishekjain123@cluster0.poelneo.mongodb.net/mern_application?retryWrites=true&w=majority")

app.get("/getUsers", async (req, res) => {
    try {
      const users = await UserModel.find({ });
      res.send(users);
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  });

app.post("/createUser",async (req,res)=>{
    try{
        const user=req.body;
        const newUser=new UserModel(user);
        await newUser.save();
        res.json(user)

    }catch(err){
        console.log(err);
    }
})


app.listen(3001,()=>{
    console.log("server runs correctly");
})