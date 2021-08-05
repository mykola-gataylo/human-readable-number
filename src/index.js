let simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let complex = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hundred = 'hundred';

module.exports = function toReadable(number) {
    let digits = [];
    let length;
    let firstItn;
    let secondInt;
    let thirdItn;

    if (number <= 19) {
        console.log('number <= 19');

        for (let i = 0; i < simple.length; i++) {
            if (number === i) {
                firstItn = simple[i];

                console.log(firstItn);
                return firstItn;
            }
        }
    }

    if (number > 19 && number < 100) {
        console.log('number < 100');

        number = number / 10;

        digits = number.toString().split('.');

        length = digits.length;

        if (length === 1) {
            digits.push('0');
            length = digits.length;
        }

        digits.forEach((el) => {
            digits.push(+el);
        })

        digits.splice(0, length);
        console.log(digits);

        for (let i = 0; i < complex.length; i++) {
            if (digits[0] === i) {
                firstItn = `${complex[i]}`;
            }
        }

        for (let i = 0; i < simple.length; i++) {
            if (digits[1] === i) {
                secondInt = `${simple[i]}`;

                if (secondInt === 'zero') {

                    console.log(`${firstItn}`);
                    return `${firstItn}`;
                } else {

                    console.log(`${firstItn} ${secondInt}`);
                    return `${firstItn} ${secondInt}`;
                }
            }
        }
    }

    if (number >= 100) {

        if (number % 10 === 0 && number % 100 !== 0) {
            console.log('number >= 100');
            console.log(number);
            digits = number.toString().split('');

            if (digits[2] === '0') {
                digits.pop();
            }

            length = digits.length;

            digits.forEach((el) => {
                digits.push(+el);
            });

            digits.splice(0, length);
            console.log(digits);

            for (let i = 0; i < simple.length; i++) {
                if (digits[0] === i) {

                    firstItn = `${simple[i]}`;
                }
            }

            for (let i = 0; i < complex.length; i++) {
                if (digits[1] === i) {

                    secondInt = complex[i];

                    console.log(`${firstItn} ${hundred} ${secondInt}`);
                    return `${firstItn} ${hundred} ${secondInt}`;
                } else {

                    if (digits[1] === 1) {
                        thirdItn = 'ten';

                        console.log(`${firstItn} ${hundred} ${thirdItn}`);
                        return `${firstItn} ${hundred} ${thirdItn}`;
                    }
                }
            }
        }

        if (number % 100 === 0) {
            console.log('number >= 100');

            digits = number.toString().split('');

            length = digits.length;

            digits.forEach((el) => {
                digits.push(+el);
            });

            digits.splice(0, length);
            console.log(digits);

            if (digits[1] === digits[2]) {
                for (let i = 0; i < simple.length; i++) {
                    if (digits[0] === i) {
                        firstItn = `${simple[i]}`;

                        console.log(`${simple[i]} ${hundred}`);
                        return `${firstItn} ${hundred}`;
                    }
                }
            }
        } else if (number % 10 !== 0) {
            number = number / 100;

            digits = number.toString().split('.');

            length = digits.length;

            console.log(digits);

            digits.forEach((int) => {
                digits.push(+int);
            });

            digits.splice(0, length);
            console.log(digits);

            if (digits.length >= 2) {
                for (let i = 0; i < simple.length; i++) {

                    if (digits[0] === i) {
                        firstItn = `${simple[i]}`;
                        secondInt = `${firstItn} ${hundred}`;
                    }
                }

                if (digits[1] <= 19) {
                    for (let k = 0; k < simple.length; k++) {
                        if (digits[1] === k) {
                            thirdItn = `${simple[k]}`;

                            console.log(`${secondInt} ${thirdItn}`);
                            return `${secondInt} ${thirdItn}`;
                        }
                    }
                }

                if (digits[1] > 19) {

                    let arr = [];
                    arr = digits[1].toString().split('');

                    arr.forEach((int) => {
                        arr.push(+int);
                    });

                    arr.splice(0, 2);

                    for (let k = 0; k < complex.length; k++) {
                        if (arr[0] === k) {
                            firstItn = complex[k];
                        }
                    }

                    for (let j = 0; j < simple.length; j++) {
                        if (arr[1] === j) {
                            thirdItn = `${simple[j]}`;

                            console.log(`${secondInt} ${firstItn} ${thirdItn}`);
                            return `${secondInt} ${firstItn} ${thirdItn}`;
                        }
                    }
                }
            }
        }
    }
}

