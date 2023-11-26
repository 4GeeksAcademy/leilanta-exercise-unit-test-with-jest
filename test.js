test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One euro should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen (3.5);

    // Si 1 euro son 156.5 yenes, entonces 3.5 euros debe ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); // 1 euro son 156.5 yenes, entonces 3.5 euros deberían ser = (3.5 * 156.5)
})

test("One euro should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromEuroToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromEuroToPound(3.5);

    // Si 1 euro son 0.87 libras, entonces 3.5 euros debe ser (3.5 * 0.87)
    const expected = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromEuroToPound(3.5)).toBe(3.045); // 1 euro son 0.87 dólares, entonces 3.5 euros deberían ser = (3.5 * 0.87)
})


