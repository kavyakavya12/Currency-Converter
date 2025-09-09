const exchangeRates = {
  USA: { currency: "USD", rateToINR: 83 },
  India: { currency: "INR", rateToINR: 1 },
  UK: { currency: "GBP", rateToINR: 108 },
  Japan: { currency: "JPY", rateToINR: 0.58 },
  Australia: { currency: "AUD", rateToINR: 56 },
};

function convertCurrency() {
  const source = document.getElementById("sourceCountry").value;
  const destination = document.getElementById("destinationCountry").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const convertedInput = document.getElementById("converted");
  const rateDisplay = document.getElementById("rateDisplay");

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid currency amount.");
    return;
  }

 
  const amountInINR = amount * exchangeRates[source].rateToINR;
  const convertedValue = amountInINR / exchangeRates[destination].rateToINR;

  convertedInput.value = `${convertedValue.toFixed(2)} ${exchangeRates[destination].currency}`;
  rateDisplay.innerText = `Exchange Rate: 1 ${exchangeRates[source].currency} = ${(exchangeRates[source].rateToINR / exchangeRates[destination].rateToINR).toFixed(2)} ${exchangeRates[destination].currency}`;
}
