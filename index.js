import express from "express"

const app = express()

const port = 8080

app.use(express.json())

const Category = [
    {id:"26789766",
   name: "Electronics",
 },
 

 {
    id: "45586875" ,
    name: " Vegetables"
 }, 
]

app.get("api/Category",( req,res) => {
    //Extract the users data from body
    res.json({
        Category: CategoryList
    })
})

app.get("api/Electronics", (req,res)=> {
    res.json([
        {
            id:"30426536",
            name:"Refrigerator",
            price:1_20_000
        },
        
         {
               id:"50697078", 
               name:"Microwaveoven", 
               price: 70_000
         }, 
    ])
})

app.get("api/Vegatables", (req,res)=> {
    res.json([
        {
            id:"7089886765", 
            name:"Brinjal", 
            price: 70
         }, 
        
         {
            id:"908987689",
            name: "Tomato",
            price:200
         }
    ])
})

app.post("api/Electronics/add", (req,res)=> {
    const body = req.body
    if(!body){
        res.status(400).send({
            message: "Invalid Body"
        })

        console.log("the body is", body)
        if(!body.id || !body.name) {
            res.status(400).json({
                message: "The requested input is incorrect please provide a valid input"
            })
        }

        CategoryList.push(body)

        res.send({
            message : "Success"
        })
    }
})


app.get("/api/category/add",(req,res)=> {
    const body =req.body
    if(!body){
        res.status(400).send({
            message: "Invalid Body"
        })

        console.log("the body is", body)
        if(!body.name) {
            res.status(400).json({
                message: "The requested input is incorrect please provide a valid input"
            })
        }
        body.id = "433434";
        CategoryList.push(body);
        res.send({
            message: "Added successfully"
        })
    }
})

app.put("/api/category/:cId", (req,res)=> {
    const {cId} = req.params;
    const body = req.body
    if(!body){
        res.status(400).send({
            message: "The requested category does not exists"
})
         console.log("the body is", body)
         if(!body.Category){
            res.status(400).json({
                message:"Please provide a valid category id"
            })
         }
         body.cId = "56576878765"
         CategoryList.push(body)
         res.send({
            message:"Updated Successfully"
         })
    }
})

app.delete("/api/category/:cId",(req,res)=> {
    const {cId} = req.params;
    const body = req.body
    if(!body){
        res.status(400).send({
            message: "The requested category does not exists"
})
         console.log("the body is", body)
         if(!body.Category){
            res.status(400).json({
                message:"Please provide a valid category id"
            })
         }
         body.cId = "56576878765"
         CategoryList.push(body)
         res.send({
            message:"Deleted Successfully"
         })
    }
})



app.listen(port,()=>{
    console.log(`Server started succesfully: ${port}`)
})

