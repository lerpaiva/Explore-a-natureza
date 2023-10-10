export default function modall()
{
const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}



form.addEventListener('change', pegarValorForm)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso")
})}