async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conetaTraduzido = await conecta.json();
    postMessage(conetaTraduzido.USDBRL);  
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})