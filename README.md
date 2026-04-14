# 🌤️ Weather App 

Uma aplicação de consulta climática simples e elegante, desenvolvida para praticar o consumo de APIs REST e manipulação dinâmica do DOM com JavaScript puro.

## 🚀 Tecnologias e Conceitos Aplicados

- **HTML5**: Estrutura semântica com foco em simplicidade.
- **CSS3 Moderno**: 
  - Flexbox para centralização perfeita.
  - Estilização de formulários e botões.
- **JavaScript (ES6+)**:
  - **Async/Await & Fetch API**: Para requisições assíncronas à API OpenWeatherMap.
  - **Template Literals**: Para inserção dinâmica dos dados no HTML.
  - **Error Handling**: Estrutura `try/catch` para monitorar falhas na busca.

## 🛠️ Como Funciona o Código

O fluxo principal da aplicação consiste em:
1. Capturar a entrada do usuário através do `document.getElementById`.
2. Montar uma URL dinâmica contendo a cidade, sua chave de API e parâmetros de idioma/unidade métrica.
3. Processar a resposta do servidor em formato JSON.
4. Renderizar as informações de temperatura e descrição do clima diretamente na tela.

## 🏁 Como rodar

1. Clone o projeto:
   ```bash
   git clone [https://github.com/Thayscosta95/Weather-App.git](https://github.com/Thayscosta95/Weather-App.git)
