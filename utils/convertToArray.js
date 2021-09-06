import { range } from './range.js'


const removeDuplicates = arr => [...(new Set(arr))]

export default function convertToArray(value) {
    let splittedValue = value.split(',').filter(item => item !== '0');

    const mappedArr = splittedValue.map(item => {

        if (item.includes('-')) {
            const [start, end] = item.split('-');
            return range(start, end);
        }
        return +item
    })

    return removeDuplicates(mappedArr.flat())
}