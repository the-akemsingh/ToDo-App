const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path=require("path");
app.listen(3000);

//browser will accept the request from anywhere
const cors=require("cors");
app.use(cors());

let todos = [];

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    res.json(todos[todoIndex]);
  }
});

let count=1;
app.post('/todos', (req, res) => {
  const newTodo = {
    // id: Math.floor(Math.random() * 1000000), // unique random id
    id: count, // unique random id
    title: req.body.title,
    description: req.body.description
  };
  count=count+1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeAtIndex(todos, todoIndex);
    res.status(200).send();
  }
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})

// // for all other routes, return 404
// app.use((req, res, next) => {
//   res.status(404).send();
// });
module.exports = app;
