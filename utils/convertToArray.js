import {range} from './range.js'

export default function convertToArray(value) {
    if (value.includes('-')) {
        const [start, end] = value.split('-')

        return range(start, end)
    }
    return value.split(',').map(str => +str)
}
