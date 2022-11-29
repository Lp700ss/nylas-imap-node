var express = require("express")
var mysql = require("mysql")

var app=express()
app.use(express.json())


const con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'emailsdb'

})

con.connect((err) => {
    if(err)
    {
        console.log(err)
    }else{
        console.log("connected !!")
    }
})


app.post('/post', (res,req)=> {
    const id=req.body.id;
    const name=req.body.name;
    const displayName=req.body.displayName;
    const address = req.body.address;

    con.query('insert into mytable values(?,?,?)',[id,name,displayName], (err, result) =>{
        if(err)
    {
        console.log(err)
    }else{
        res.send("Posted data in database")
    }
    }
    )

})

app.listen(3000, (err) => {
    if(err)
    {
        console.log(err)
    }else{
        console.log("on port 3000")
    }
})