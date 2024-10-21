const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const store = []; 
function middleware(req,res,next){
    // const x = req.query.number;
    if(store.length <= 2){
        next();
    }else{
        res.json({
            err:"Sorry the space is full of items"
        })
    }
}

// app.use(middleware);
app.get("/home",function(req,res){
        const itemno = req.query.item;
        const items = store[itemno];
        const x = store.length
        res.json({
        items,
        x
    })
})

app.post("/store",middleware,function(req,res){
    const item = req.body.item;
        store.push(item)
        res.json({
            msg:"the item is stored",
            item
        })
})

app.put("/modify",function(req,res){
    const oldItem = store[1];
    store[1] = "channa bhaji";
    res.json({
        oldData : oldItem,
        updatedData : store[1]
    })
})


// app.delete("/deleteItem",function(req,res){
//     const itemIndex = req.query.itemIndex;
//     const deletedItem = store[itemIndex].pop();
//     res.json({
//         oldData : deletedItem,
//         msd : "delete successfully"
//     })
// })


app.listen(port);