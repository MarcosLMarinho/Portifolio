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
typeWrite(titulo);
