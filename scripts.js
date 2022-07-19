const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.44
const euro = 5.51
const bitCoin = 124815.76

const buttonValue = () => {
    const inputReais = document.getElementById("input-real").value
    const realTest = document.getElementById("real-test")
    const dolarTest = document.getElementById("currency-test")



    realTest.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais);

    if(select.value === "US$ Dólar Americano") {
        dolarTest.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar);
    
    }
    if(select.value === "Є Euro") {
    dolarTest.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputReais / euro);
    }
    if(select.value === "Bitcoin") {
        dolarTest.innerHTML = (inputReais / bitCoin)
    }
}

changeSelecto = () => {
    const currencyName = document.getElementById("currency-name")
    if(select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/Dolar.png"
    }

    if(select.value === "Є Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }
    
    if(select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/CriptBitcoin.png"
    }
    buttonValue()
}

button.addEventListener("click", buttonValue)
select.addEventListener("change", changeSelecto)
