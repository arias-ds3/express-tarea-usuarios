let express = require("express")
let app = express();

let tasks = [
    { id:1, text:"hacer la compra"},
    { id:2, text:"pagar la luz"},
    { id:3, text:"revisar las facturas"},
]
let users = [
    { id:1, email:"user1", password:"user1"},
    { id:2, email:"user2", password:"user2"},
]

app.get("/tasks", (req, res)=>{
    let text = req.query.text
    if ( text != undefined){
        let tasksWithText = tasks.filter ( tasks => tasks.text.indexOf (text) != -1 )
        res.send(tasksWithText)
        return 
    }
    res.send(tasks)
})

app.get("/user/:id", (req, res)=>{
   let id = req.params.id
   let user = users.find( (u) => t.id == id )
   if (user == undefined){
    res.send("Error")
    return 
   }
    res.send(user)
})

app.get("/users", (req, res)=>{
    let email = req.query.email
    if (email != undefined){
      let usersWithEmail = users.filter( user => user.email == email)
      res.send(usersWithEmail)
      return 
    }
    res.send(users)
})

app.listen(8081, ()=>{
    console.log("Servidor activo");
})