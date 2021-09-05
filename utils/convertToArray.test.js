import convertToArray from './convertToArray.js'

describe('convertToArray function', () => {
    it('should convert values just with commas', () => {
        expect(convertToArray('1, 2, 4')).toEqual([1, 2, 4])
        expect(convertToArray('1,2,4')).toEqual([1, 2, 4])
        expect(convertToArray('1,   2,  4')).toEqual([1, 2, 4])
    })

    it('should convert values with just one dash', () => {
        expect(convertToArray('1-4')).toEqual([1, 2, 3, 4])
        expect(convertToArray('4-2')).toEqual([2, 3, 4])
    })

    it.skip('should convert mixed values format', () => {
        expect(convertToArray('1, 3, 5-7')).toEqual([1, 3, 5, 6, 7])
        expect(convertToArray('1, 2-4, 8-10')).toEqual([1, 2, 3, 4, 8, 9, 10])
        expect(convertToArray('4-2, 1, 10-12')).toEqual([2, 3, 4, 1, 10, 11, 12])
    })

    it.skip('should remove duplicates', () => {
        expect(convertToArray('1, 3, 1')).toEqual([1, 3, 1])
        expect(convertToArray('1, 2-4, 3')).toEqual([1, 2, 3, 4])
        expect(convertToArray('4-2, 4, 1-2')).toEqual([2, 3, 4, 1])
    })
})