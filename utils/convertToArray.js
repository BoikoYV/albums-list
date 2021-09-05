import { range } from './range.js'

export default function convertToArray(value) {

    const ranges = [];
    const numbers = value.split(',').filter(str => {
        if (str.includes('-')) {
            ranges.push(str);
            return;
        }
        if (str === '0') return;

        return str;
    });

    const rangesArr = (ranges.map(element => {
        const elementSteps = element.split('-');
        return range(elementSteps[0], elementSteps[1])
    })).flat();

    const resultArr = [...new Set(numbers.map(number => +number).concat(rangesArr))];
    return resultArr
}
