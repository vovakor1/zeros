module.exports = function getZerosCount(number) {
    let zerosAmount = 0;
    for (let i = 5; i <= number; i+=5) {
        let currentDividend = i;

        while (currentDividend % 5 === 0) {
              zerosAmount++;
              currentDividend /= 5;
        }
    }
    return zerosAmount;
}

