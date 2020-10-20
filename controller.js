const { model } = require('mongoose');
const uniqid = require('uniqid');

let todos = [
    {
        id:uniqid(),
        title: "AWDWDawdfa",
    },
    {
        id:uniqid(),
        title: "btrnsa"
    },
    {
        id:uniqid(),
        title: "123btrnsa"  
    },
    {
        id:uniqid(),
        title: "bawdrnsa"
    },
    
]

module.exports.get = (req, res) => {   
    res.status(200).json({
        success: "true", 
        data:todos  
    })
}

module.exports.post = (req, res) => {
    let newItem = req.body
    newItem.id = uniqid()
    todos.push(newItem)
    console.log(newItem)
    res.status(200).json({
        success: "true", 
        data:todos  
    })
} 

module.exports.delete = (req, res) => {
    console.log("delete")
    let taskId = req.params.id
    todos = todos.filter(el => el.id !== taskId)
    console.log(todos) 
    res.status(200).json({
        success: "true", 
        data:todos  
    })
}

module.exports.put = (req, res) => {

    let taskId = req.params.id
    todos = todos.filter(el => {
        if(el.id === taskId) {
            el.title = req.body.title
        }
        return true
    })
    res.status(200).json({
        success: "true", 
        data:todos  
    })
}