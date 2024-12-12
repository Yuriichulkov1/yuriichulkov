function convertCurrency() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Фіксовані курси валют відносно гривні (UAH)
    const rates = {
        UAH: 1,
        USD: 42,
        EUR: 45
    };

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Будь ласка, введіть коректну суму.";
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = "Валюти для конвертації не повинні співпадати.";
        return;
    }

    // Конвертація через гривню як базову валюту
    const amountInUAH = fromCurrency === "UAH" ? amount : amount * rates[fromCurrency];
    const convertedAmount = (fromCurrency === "UAH" 
        ? amount / rates[toCurrency] 
        : amountInUAH / rates[toCurrency]).toFixed(2);

    document.getElementById('result').innerText = `Результат: ${convertedAmount} ${toCurrency}`;
}
