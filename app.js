// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar a pasta "public" como diretório estático
app.use(express.static(path.join(__dirname, 'public')));

// Configurar a engine de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para a página inicial (Vue.js)
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express em execução na porta ${port}`);
});
