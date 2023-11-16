// Esercizio
// Impariamo a ragionare in ottica TDD e a scrivere i nostri Unit Tests.
// Creiamo i test per la nostra funzione createSlug che crea gli slug dei nostri post ricevendo come argomento il titolo da convertire e la lista di tutti i post.Eseguiamo i seguenti test:

//     createSlug dovrebbe ritornare una stringa
//     createSlug dovrebbe ritornare una stringa in lowercase
//     createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
//     createSlug dovrebbe incrementare di 1 lo slug quando esiste già
//     createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
//     createSlug dovrebbe lanciare un errore se manca l’array dei post

// Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.

//importo la libreria Jest
const {test, expect} = require("@jest/globals");
//importo la function
const createSlug = require("./createSlug");
const postList = [
    { title: 'Caprese', slug: 'caprese' },
    { title: 'Ciambellone', slug: 'ciambellone' },
    { title: 'Crostata', slug: 'crostata' },
  ];
  

test("createSlug dovrebbe ritornare una stringa", () => {
  const title = "Questo è un titolo";
  const result = createSlug(title, postList);
  expect(typeof result).toBe("string");
});

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
  const title = "QUESTO è UN TITOLO IN MAIUSCOLO";
  const result = createSlug(title, postList);
  expect(result).toBe("questo-è-un-titolo-in-maiuscolo");
});

test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
  const title = "Questo è un titolo";
  const result = createSlug(title, postList);
  expect(result).toBe("questo-è-un-titolo");
});

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const title = "caprese";
    const result = createSlug(title, postList);
    expect(result).toBe("caprese-1");
  });
  
