export function range(start, end) { // 3, 9

    if (start === '0') {
        +start++;
    } else if (end === '0') {
        +end++;
    }

    const startNum = +start;
    const endNum = +end;
    if (startNum > endNum) return range(endNum, startNum)
    return Array.from({ length: endNum - startNum + 1 }, (element, index) => index + startNum)

}
