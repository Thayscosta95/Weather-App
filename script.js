const apiKey = "121a778165183c96ef45a1f429bbd037";

async function buscarClima() {
  const cidade = document.getElementById("cidade").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    mostrarClima(dados);
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

function mostrarClima(dados) {
  const resultado = document.getElementById("resultado");

  const temperatura = dados.main.temp;
  const descricao = dados.weather[0].description;

    
  resultado.innerHTML = `
    <p><strong>Temperatura:</strong> ${temperatura}°C</p>
    <p><strong>Clima:</strong> ${descricao}</p> `;
}