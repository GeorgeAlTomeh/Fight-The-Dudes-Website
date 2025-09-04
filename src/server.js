const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');

const home = (req, res) => 
{
  res.redirect('http://localhost:8080/en');
}

const en = (req, res) => 
{
  res.render('home-en');
}

const ar = (req, res) => 
{
  res.render('home-ar');
}

const fr = (req, res) => 
{
  res.render('home-fr');
}

const sy = (req, res) => 
{
  res.render('home-sy');
}

const download = (req, res) => 
{
  res.download(__dirname+"/screwCrew.png",'screwCrew.png');
}

app.get('/', home);
app.get('/en', en);
app.get('/ar', ar);
app.get('/fr', fr);
app.get('/sy', sy);

app.get('/download', download);

app.listen('8080', () => {
  console.log('listening at port 8080');
})