import express from 'express';
import fetch from 'node-fetch'; // of global fetch bij Node 18+
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Setup voor Liquid
import { Liquid } from 'liquidjs';
const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', './server/views');
app.set('view engine', 'liquid');

// Static bestanden
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/client', express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../dist')));

const jsonAdress = 'https://fdnd-agency.directus.app/items/atlas_address/';
const jsonPerson = 'https://fdnd-agency.directus.app/items/atlas_person/';
const jsonPoster = 'https://fdnd-agency.directus.app/items/atlas_poster/';
const jsonFamily = 'https://fdnd-agency.directus.app/items/atlas_family/';




// Route
app.get('/', async (req, res) => {
  try {
    const [personRes, addressRes] = await Promise.all([
      fetch(jsonPerson),
      fetch(jsonAdress)
    ]);

    const personen = (await personRes.json()).data;
    const adressen = (await addressRes.json()).data;

    const straten = [...new Set(
      adressen
        .map(adres => adres.street?.trim()) // trim spaties
        .filter(Boolean) // filter lege of undefined waarden
    )];

    res.render('index', { personen, straten });
  } catch (err) {
    console.error(err);
    res.status(500).send('Fout bij ophalen van API');
  }
});

app.get('/:straatnaam', async (req, res) => {
  try {
    const straatnaam = req.params.straatnaam.trim();

    const [addressRes, personRes] = await Promise.all([
      fetch(jsonAdress),
      fetch(jsonPerson)
    ]);

    const adressen = (await addressRes.json()).data;
    const personen = (await personRes.json()).data;

    // Filter adressen op straatnaam
    const gefilterdeAdressen = adressen.filter(adres => adres.street?.trim() === straatnaam);

    const uniekeAdressen = [];

const bestaandeCombinaties = new Set();

for (const adres of gefilterdeAdressen) {
  const combinatie = `${adres.street}-${adres.house_number}-${adres.addition ?? ''}`;
  if (!bestaandeCombinaties.has(combinatie)) {
    bestaandeCombinaties.add(combinatie);
    uniekeAdressen.push(adres);
  }
}

uniekeAdressen.sort((a, b) => {
  // Eerst sorteren op huisnummer
  if (a.house_number !== b.house_number) {
    return a.house_number - b.house_number;
  }

  // Daarna optioneel op addition als die er is (alfabetisch)
  const additionA = a.addition || '';
  const additionB = b.addition || '';
  return additionA.localeCompare(additionB);
});



    // IDs van de adressen in die straat
    const adresIds = gefilterdeAdressen.map(adres => adres.id);

    // Personen die op die adressen wonen
    const personenInStraat = personen.filter(persoon =>
      adresIds.includes(persoon.address_id)
    );

    res.render('straat', {
      straatnaam,
      personen: personenInStraat,
      adressen: uniekeAdressen // gebruik de gefilterde lijst zonder duplicaten
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Fout bij ophalen van straatpagina');
  }
});




const port = 3000;
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
