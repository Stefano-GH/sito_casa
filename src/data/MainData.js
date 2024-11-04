import { faWandSparkles, faCat, faBolt, faRing } from "@fortawesome/free-solid-svg-icons";
import regole_img from "./images/regole.jpeg";


////////////////////////////////////////
// NAVBAR + HOME - Link di navigazione
////////////////////////////////////////
export const navLinks = [
    { titolo:"Regole della casa", to:"/sito_casa/regole" },
    { titolo:"I nostri gatti", to:"/sito_casa/gatti" },
    { titolo:"Fun facts", to:"/sito_casa/funfacts" },
    { titolo:"Nascita dell'idea", to:"/sito_casa/idea" },
]


////////////////////////////////////////
// HOME - Frasi di benvenuto
////////////////////////////////////////
export const frasiBenvenuto = [
    {
        frase: "Non sei fan di",
        bold: "Harry Potter",
        icon: faWandSparkles
    },
    {
        frase: "Non ami i",
        bold: "gatti",
        icon: faCat
    },
    {
        frase: "Non apprezzi le",
        bold: "equazioni di Maxwell",
        icon: faBolt
    },
    {
        frase: "Il tuo hobbit preferito è",
        bold: "Frodo",
        icon: faRing
    }
]


////////////////////////////////////////
// HOME - Carte
////////////////////////////////////////
export const cardData = [
    {
        nome:"Test 1",
        img: regole_img
    },
    {
        nome:"Test 2",
        img: regole_img
    },
    {
        nome:"Test 3",
        img: regole_img
    }
]