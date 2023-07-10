var film = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]
var music = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]
var game = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]
var disney = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]
var anime = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]
var dessainanimer = [
    "elem1",
    "elem2",
    "elem3",
    "elem4",
    "elem5",
    "elem6"
]

var Play = $('#submit');
var film = $('#film');
var selec = [];
$(Play).click(() =>{
    if (film.checked) {
      console.log("La checkbox est cochée !");
    } else {
      console.log("La checkbox n'est pas cochée !");
    }
})