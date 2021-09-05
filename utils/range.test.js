import { expect, it } from '@jest/globals'
import { range } from './range.js'

describe('range function', () => {
    it('should return array from numbers', () => {
        const result = range(1, 5)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    it('should return array from strings', () => {
        expect(range('3', '8')).toEqual([3, 4, 5, 6, 7, 8])
    })

    it('should return reversed array if start greater than end', () => {
        expect(range(10, 6)).toEqual([6, 7, 8, 9, 10])
    })

    it('should return reversed array if start greater than end with strings', () => {
        expect(range('12', '8')).toEqual([8, 9, 10, 11, 12])
    })

    it('should return start if start equals to end', () => {
        expect(range(3, 3)).toEqual([3])
    })

    it('should increase result by 1 if the value is 0', () => {
        expect(range('0', '2')).toEqual([1, 2])
        expect(range('10', '0')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})