export default function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){     
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 200 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
<<<<<<< HEAD
typeWrite(titulo);
=======
typeWrite(titulo);
>>>>>>> 5b3b4cdb26419e4fd2a12691d5550bb42eeda743
