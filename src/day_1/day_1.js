const indexPlusOne = (arr, i) => i + 1
const halfWayIndex = (arr, i) => i + (arr.length / 2)

const pairDigitsWithNextDigit = (digits, getNextIndex) => {
    const pairs = [];

    for (let i = 0; i < digits.length; ++i) {
        const digit = digits[i];

        const nextIndex = getNextIndex(digits, i) % digits.length
        const next = digits[nextIndex]
        //const nextIndex = nextIndex(digits, i) % digits.length
        //const next = nextIndex == digits.length ? digits[0] : digits[nextIndex];

        pairs.push({
            value: digit,
            next: next
        });
    }

    return pairs;
};

const numberStringToDigits = numberString => numberString
    .split('')
    .map(digitString => parseInt(digitString, 10));

const solveCaptcha = (value, getNextIndex) => {
    getNextIndex = getNextIndex || indexPlusOne;

    const digits = numberStringToDigits(value);
    const pairs = pairDigitsWithNextDigit(digits, getNextIndex);

    return pairs
        .filter(p => p.value == p.next)
        .map(p => p.value)
        .reduce((total, value) => total + value, 0);
}

module.exports = {
    solveCaptcha: solveCaptcha,
    indexPlusOne: indexPlusOne,
    halfWayIndex: halfWayIndex
};