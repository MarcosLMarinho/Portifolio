function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){     
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 60 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

function mostrar(){
    var mostrar = [document.getElementById('p4'), document.getElementById('p5'),document.getElementById('p6')]
 
    if (mostrar[0].style.display== "none" || mostrar[1].style.display == "none", mostrar[2].style.display == "none") {
      mostrar[0].style.display == "block",
      mostrar[1].style.display == "block",
      mostrar[2].style.display == "block"
    } else {
      mostrar[0].style.display == "none",
      mostrar[1].style.display == "none",
      mostrar[2].style.display == "none"
    }
}