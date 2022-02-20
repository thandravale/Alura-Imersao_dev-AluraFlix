var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg",
  "https://img.ibxk.com.br/2021/04/19/19110729763117.jpg?w=328",
  "https://img.ibxk.com.br/2021/01/04/04185513369329.jpg?w=328",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d8/Capit%C3%A3o_Am%C3%A9rica_O_Primeiro_Vingador_-_Poster.jpg/250px-Capit%C3%A3o_Am%C3%A9rica_O_Primeiro_Vingador_-_Poster.jpg",
  "http://vortexcultural.com.br/images/2019/04/homem-de-ferro-2.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/image_a2514f6d.jpeg?region=0,0,540,810",
  "https://lumiere-a.akamaihd.net/v1/images/unnamed_13_75a3ebb1.jpeg?region=0%2C0%2C356%2C512",
  "https://br.web.img2.acsta.net/pictures/21/05/12/17/18/2995518.jpg"
];
console.clear();

var qntFilmes = listaFilmes.length;

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

console.log(qntFilmes);
function adicionar() {
  var linkFilme = document.getElementById("filme").value;
  var indexFilme = listaFilmes.indexOf(linkFilme);
  var indexLink = listaFilmes[indexFilme];

  if (linkFilme.endsWith(".jpg") || linkFilme.endsWith(".png")) {
    if (linkFilme != indexLink) {
      listaFilmes.push(linkFilme);
      document.getElementById("body").innerHTML +=
        '<img class= "filme" src=' + listaFilmes[qntFilmes] + ">";
    }
  } else {
    console.error("está dando erro");
  }
  document.getElementById("filme").value = "";
}
