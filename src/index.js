module.exports = function toReadable (number) {
    let num = String(number);
    const zero = 'zero';
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    // 0
    if (number === 0) return zero;

    // 1-19
    if (number > 0 && number < 20) return units[number];

    // 20, 30, ... , 90
    if (number > 19 && number < 91 && number % 10 === 0) {
        let i = number / 10;
        return dozens[i];
    };

    // 21, ..., 99, except 30, 40, etc.
    if (number > 20 && number < 100) {
        let i1 = Math.trunc(number / 10);
        let i2 = number % 10;
        return (dozens[i1] + ' ' + units[i2]);
    };

    // 100, 200, ... , 900
    if (num.length === 3 && number % 100 === 0) {
        let i = Math.trunc(number / 100);
        return (units[i] + ' hundred');
    };

    // 101 - 119, 201 - 219, etc
    if (num.length === 3 && number % 100 > 0 && number % 100 < 20) {
        let i = Math.trunc(number / 100);
        let i1 = number % 100;
        return (units[i] + ' hundred ' + units[i1]);
    };

    // 120, 130, ... , 190; ... ; 920, 930, ... , 990
    if (num.length === 3 && number % 10 === 0) {
        let i = Math.trunc(number / 100);
        let i1 = (number % 100) / 10;
        return(units[i] + ' hundred ' + dozens[i1]);
    }

    // 121 - 129, ... , 191 - 199; ... ; 921 - 929, ... , 991 - 999
    if (num.length === 3 && number % 100 > 20) {
        let i = Math.trunc(number / 100);
        let i1 = Math.trunc((number % 100) / 10)
        let i2 = number % 10;
        return(units[i] + ' hundred ' + dozens[i1] + ' ' + units[i2]);
    };
}
