module.exports = function getZerosCount(number) {
    let zerosAmount = 0;
    for (let i = 5; i <= number; i*=5) {
        zerosAmount += (number - number % i) / i;
    }
    return zerosAmount;
};

