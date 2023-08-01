const path = require("path");
const { readFile, writeFile } = require("fs").promises;

async function main() {
  console.log(" === SYNCHRONOUS === ")
  
  let newPokemon = {
    name: "Pikachu",
    type: "Electric"
  };

  console.log('new pokemon created')
  let dbArray = [];
  console.log('db array created');
  dbArray.push(newPokemon);
  console.log('pokemon added to db');
  console.log(dbArray);

  console.log(" === ASYNCHRONOUS === ")

  // console.log(__dirname);
  const buffer = await readFile(path.join(__dirname, 'pokemonDb.txt'));
  console.log(buffer);

  const db = JSON.parse(buffer);
  // console.log(db);

  db.push(newPokemon);

  console.log(db);

  const presave = JSON.stringify(db); 
  await writeFile(path.join(__dirname, 'pokemonDb.txt'), presave);
}

main();