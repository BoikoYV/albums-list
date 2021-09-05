export function range(start, end) { // 3, 9
    const startNum = +start;
    const endNum = +end;
    if (startNum > endNum) return range(endNum, startNum)
    return Array.from({ length: endNum - startNum + 1}, (element, index) => index + startNum)

    // const result = []
    // for (let index = startNum; index <= endNum; index++) {
    //     result.push(index)
    // }
    // return result
}
