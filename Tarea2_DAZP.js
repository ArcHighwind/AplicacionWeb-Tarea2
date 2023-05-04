const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let blog = [];

app.get('/blog', (req, res) => {
  res.json(blog);
});

app.post('/blog', (req, res) => {
  const {header, body} = req.body;

  if (!header || !body) {
    return res.status(400).json({message: 'Falta información para crear el blog.'});
  }

  const blog = {
    id: blog.length + 1,
    header,
    body
  };

  blog.push(blog);

  res.status(201).json(blog);
});

app.put('/blog/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const {header, body} = req.body;

  if (!header || !body) {
    return res.status(400).json({message: 'Falta información para actualizar el blog.'});
  }

  const blog = blog.find(blog => blog.id === id);

  if (!blog) {
    return res.status(404).json({message: 'El blog no existe.'});
  }

  blog.header = header;
  blog.body = body;

  res.json(blog);
});

app.delete('/blog/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = blog.findIndex(blog => blog.id === id);

  if (index === -1) {
    return res.status(404).json({message: 'El blog no existe.'});
  }

  blog.splice(index, 1);

  res.status(204).send();
});

app.listen(3000, () => {
});