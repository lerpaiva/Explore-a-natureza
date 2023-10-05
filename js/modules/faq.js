export default function faq(){

    const pergunta = document.querySelectorAll('.js-faq h3')
    const resposta = document.querySelectorAll('.js-faq p')
    const spann = document.querySelectorAll('.js-faq span')

    function ativarFaq(indice){
        resposta[indice].classList.toggle('active')
        if (resposta[indice].classList.contains('active')== true){
            spann[indice].innerText = "▲"
        }else{
            spann[indice].innerText = "▼"
        }
    }
    pergunta.forEach((item,indice) =>{
        item.addEventListener('click',() =>{
            ativarFaq(indice)
        })
    })
}