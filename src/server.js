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
  res.redirect('https://fight-the-dudes-website.onrender.com/en');
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
  res.redirect('https://release-assets.githubusercontent.com/github-production-release-asset/1234181722/edbf54d5-6b43-47ec-a013-9ccf8581efe1?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-05-14T17%3A18%3A26Z&rscd=attachment%3B+filename%3DFight_The_Dudes_V_1_0.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-05-14T16%3A17%3A40Z&ske=2026-05-14T17%3A18%3A26Z&sks=b&skv=2018-11-09&sig=NKrgvDl8daTZZkYrjzJU8iCjmy06F%2BAClYpc6Xd1BpQ%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3ODc3NzI2MCwibmJmIjoxNzc4Nzc1NDYwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.2Eofa_G-Q1uTNlLZf_Ib4PKBTkWPlfTZZ8tQfq1-i7c&response-content-disposition=attachment%3B%20filename%3DFight_The_Dudes_V_1_0.apk&response-content-type=application%2Fvnd.android.package-archive');
}

const image = (req, res) => 
{
  res.download(__dirname+'/screwCrew.png', 'screwCrew.png');
}

app.get('/', home);
app.get('/en', en);
app.get('/ar', ar);
app.get('/fr', fr);
app.get('/sy', sy);
app.get('/img', image);
app.get('/download', download);

app.listen('80', () => {
  console.log('listening at port 80');
})