module.exports = function getZerosCount(number) {
    const factorialNumber = number;
    let zerosAmount = 0;
    for (let i = factorialNumber; i > 4; i--) {
        let currentDividend = i;

        while (currentDividend % 5 === 0) {
              zerosAmount++;
              currentDividend = currentDividend / 5;
        }
    }
    return zerosAmount;
}

