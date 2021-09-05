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

    it('should convert mixed values format', () => {
        expect(convertToArray('1, 3, 5-7')).toEqual([1, 3, 5, 6, 7])
        expect(convertToArray('1, 2-4, 8-10')).toEqual([1, 2, 3, 4, 8, 9, 10])
        expect(convertToArray('4-2, 1, 10-12')).toEqual([1, 2, 3, 4, 10, 11, 12])
    })

    it('should remove duplicates', () => {
        expect(convertToArray('1, 3, 1')).toEqual([1, 3])
        expect(convertToArray('1, 2-4, 3')).toEqual([1, 3, 2, 4])
        expect(convertToArray('4-2, 4, 1-2')).toEqual([4, 2, 3, 1])
    })

    it('should increase result by 1 if the value is 0', () => {
        expect(convertToArray('0, 3, 10')).toEqual([3, 10])
        expect(convertToArray('0-2, 3, 4-0')).toEqual([3, 1, 2, 4])


    })
})