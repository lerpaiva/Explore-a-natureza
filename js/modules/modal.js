export default function modall()
{/*função que pega a modal e faz com q apareça somente ao recarregar a pagina, e caso já tenha se inscrito, ira parar de aparecer*/
    const jsmodal = document.querySelector(".js-modal");
    const dados = {}
    if (localStorage.getItem("email") === null) {
      jsmodal.classList.add("active");
    }
    else {
      jsmodal.classList.remove("active");
    }
    
    function pegarValorForm(event){
      dados[event.target.name] = event.target.value
      console.log(dados)
    }
    
    // adiciona um listener para o envio do formulário
    jsmodal.addEventListener('change', pegarValorForm)
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
      event.preventDefault();
      localStorage.setItem("email", JSON.stringify(dados.email))
      alert("Dados salvos com sucesso")
      jsmodal.classList.remove("active");
    });
    
    // adiciona um listener para o botão de fechar
    document.querySelector(".modal-close").addEventListener("click", () => {
      // esconde o elemento
      jsmodal.classList.remove("active");
    });

    if (localStorage.getItem("email") === null) {
        setTimeout(() => {
          jsmodal.classList.add("active");
        }, 3000);
      }
}


    