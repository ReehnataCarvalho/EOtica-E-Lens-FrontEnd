const container = document.querySelector('#items-produto')



fetch(`http://localhost:8000/produto`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach(produto => {
      console.log(data)

      const mediaProduto = document.createElement('div');
      mediaProduto.setAttribute('class', 'media mb-4');
      mediaProduto.innerHTML = `
            <div class="media-body>
                <h5 class="mt-0"><strong>${produto.name}</strong></h5>
                <br>
                ${produto.preco}
              </div>`

      container.appendChild(mediaProduto)

const buttonRegistro = document.querySelector('#registerNewProduto')
buttonRegistro.addEventListener("click", registerNewProduto)
function registerNewProduto() {
  const nome = document.querySelector("#nome_input").value
  const preco = document.querySelector("#preco_input").value
  const produto = {
    nome, precol
  }
  fetch(
    'http://localhost:8000/produto',
    {
      method: 'POST',
      body: JSON.stringify(produto),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((response) =>{
    console.log(response)
    if(response.status === 200){
      window.location.reload()
    } else{
      window.alert('All fields are required.')
    }
  })
}
