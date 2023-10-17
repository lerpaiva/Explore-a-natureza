export default function conteudo(){
/*definindo variaveis para manuzear a lista das imagens e os seus respectivos conteudos*/
const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-conteudo section')


console.log(imagens)
console.log(textos)

/*função que ativa conteudo ao clicar em tal imagem, indice da imagem 0, ativa texto 0*/
function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item,indice)=>{
    item.addEventListener('click',() =>{
        ativarConteudo(indice)
    })
})


}