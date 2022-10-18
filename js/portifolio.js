//Função meu nome
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){     
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

//Função Projetos
function mostrar(){
    var mostrar = [document.querySelector('.caixa_projeto_escondido0'), document.querySelector('.caixa_projeto_escondido1'), document.querySelector('.caixa_projeto_escondido2')]
   
    if (mostrar[0].style.display== "none") {
      mostrar[0].style.display = "block"
    } if (mostrar[1].style.display== "none"){
      mostrar[1].style.display = "block"
    } if (mostrar[2].style.display== "none") {
      mostrar[2].style.display = "block"
    } else {
      for (var i = 0 ; i<=2 ; i++){
        mostrar[i].style.display = "none"
      }
    }
    if (mostrar[0].style.display == 'block'){
      document.querySelector('#ver').value = 'Ver menos'
    } else {
      document.querySelector('#ver').value = 'Ver mais'
    }
}
