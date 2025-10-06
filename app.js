const imagens = document.querySelectorAll('img');
let foto_troca = false;

function trocarfotos() {
  if (!foto_troca) {
    for (let i = 0; i < imagens.length; i++) {
      imagens[i].src = `fut${i + 8}.jpg`;
    }
    foto_troca = true;
  } else {
    for (let i = 0; i < imagens.length; i++) {
      imagens[i].src = `fut${i + 1}.jpg`;
    } 
}
}