var express = require('express');
var app = express();

var todos = [{
    id: 1,
    description: 'Meet mom for launch',
    completed: false,
},{
    id:2,
    description:'Go to Market',
    completed: false
}, {
    id: 3,
    description: 'Go to the Mall',
    completed:true
},{
    id: 4,
    description: 'Go to Library',
    completed:true
}]


// Route
app.get('/', function(req,res){
    res.send('Todo API Root');
})

// get/todos
app.get('/todos', function(req,res){
    res.json(todos);
})
// get/todos/:id
app.get('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    todos.forEach(function(todo){
        if(todoId === todo.id){
            matchedTodo = todo;
        }
    });
    if(matchedTodo){
        res.json(matchedTodo)
    }else{
        res.status(404).send()
    }
})





app.listen(process.env.PORT,process.env.IP, function(){
    console.log('Server is runing');
})
