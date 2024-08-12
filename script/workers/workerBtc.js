async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL');
    const conetaTraduzido = await conecta.json();
    postMessage(conetaTraduzido.BTCBRL);  
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})