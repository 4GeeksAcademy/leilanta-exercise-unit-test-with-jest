// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "EUR": 1, // european euro
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función para convertir de dólares a yenes
function fromDollarToYen(amount) {
    // Obtener el valor de conversión de los yenes
    let yenToDollar = oneEuroIs["JPY"] / oneEuroIs["USD"];
    // Convertir la cantidad a yenes
    return amount * yenToDollar;
}
// Función para convertir de euros a dólares
function euroToDollar(amount) {
    // Obtener el valor de conversión de los dólares
    let dollarToEuro = oneEuroIs["USD"] / oneEuroIs["EUR"];
    // Convertir la cantidad a dólares
    return amount * dollarToEuro;
}
// Función para convertir de yenes a libras esterlinas
function fromYenToPound(amount) {
    // Obtener el valor de conversión de las libras esterlinas
    let poundToYen = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // Convertir la cantidad a libras esterlinas
    return amount * poundToYen;
}
// Pruebas
console.log(fromDollarToYen(100)); // 15650
console.log(euroToDollar(100)); // 1070
console.log(fromYenToPound(10000)); // 649.4444444444444

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }