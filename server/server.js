import express from 'express';
import fetch from 'node-fetch'; // of global fetch bij Node 18+
import path from 'path';
import {
  fileURLToPath
} from 'url';

const app = express();

// Setup voor Liquid
import {
  Liquid
} from 'liquidjs';
const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', './server/views');
app.set('view engine', 'liquid');

// Static bestanden
const __dirname = path.dirname(fileURLToPath(
  import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/client', express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../dist')));

// Route
app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://fdnd-agency.directus.app/items/atlas_person/');
    const json = await response.json();
    const personen = json.data;

    res.render('index', {
      personen
    });
  } catch (err) {
    res.status(500).send('Fout bij ophalen van API');
  }
});

app.get('/street', async (req, res) => {
  try {
    const response = await fetch('https://fdnd-agency.directus.app/items/atlas_person/');
    const json = await response.json();
    const personen = json.data;

    res.render('street', {
      personen
    });
  } catch (err) {
    res.status(500).send('Fout bij ophalen van API');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
