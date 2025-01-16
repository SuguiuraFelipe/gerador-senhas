import { useState } from 'react'
import './App.css'


function App() {
  
  function gerarSenhaAleatoria(tamanho = 6) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`";
    let senha = "";
  
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indiceAleatorio];
    }
  
    return senha; // Retorna a senha gerada
  }
  
  function passwordGenerate() {
    // 1. Gera a senha
    const senha = gerarSenhaAleatoria(); // A senha gerada é atribuída à variável 'senha'
  
    // 2. Seleciona o elemento 'password' no DOM
    const divPassword = document.getElementById('password');
  
    // 3. Atribui a senha gerada ao texto do elemento
    divPassword.innerText = senha; // Agora 'senha' está definida e é atribuída corretamente
    setCopyText ('Copiar')
  }  

  const [copyText, setCopyText] = useState('Copiar')
  function changeText(){
    setCopyText ('Copiado!')
    navigator.clipboard.writeText(document.getElementById('password').innerText)
  }
  
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className='button-wrapper'>
        <button onClick={() => passwordGenerate()}>
          Gerar
        </button>
        <button onClick={() => changeText()}>
          {copyText}
        </button>
      </div>
      <div id='password'></div>
    </>
  )
}

export default App
