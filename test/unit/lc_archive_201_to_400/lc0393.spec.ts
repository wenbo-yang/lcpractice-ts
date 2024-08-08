xdescribe('leetcode 393: utf 8 validation', () => {
    function validUtf8(data: number[]): boolean {
        let index = 0;

        while (index < data.length) {
            if (isOneByte(data[index])) {
                index += 1;
                continue;
            }

            if (index < data.length - 1 && isTwoByte(data[index], data[index+1])) {
                index +=2;
                continue;
            }

            if (index < data.length - 2 && isThreeByte(data[index], data[index+1], data[index + 2])) {
                index +=3;
                continue;
            }


            if (index < data.length - 3 && isFourByte(data[index], data[index+1], data[index + 2], data[index + 3])) {
                index +=4;
                continue;
            }

            break;
        }

        return index === data.length;
    };

    function isOneByte(num: number): boolean {
        return (0b10000000 & num) === 0
    }

    function isTwoByte(num1: number, num2: number): boolean {
        return ((0b10000000 & num1) > 0 && (0b01000000 & num1) > 0 && (0b00100000 & num1) === 0) && 
               isMultiByeHelper(num2);
    }

    function isThreeByte(num1: number, num2: number, num3: number): boolean {
        return ((0b10000000 & num1) > 0 && (0b01000000 & num1) > 0 && (0b00100000 & num1) > 0 && (0b00010000 & num1) === 0) && 
               isMultiByeHelper(num2) && isMultiByeHelper(num3);
    }

    function isFourByte(num1: number, num2: number, num3: number, num4: number): boolean {
        return ((0b10000000 & num1) > 0 && (0b01000000 & num1) > 0 && (0b00100000 & num1) > 0 && (0b00010000 & num1) === 0) && 
               isMultiByeHelper(num2) && isMultiByeHelper(num3) && isMultiByeHelper(num4);
    }

    function isMultiByeHelper(num: number): boolean {
        return ((0b10000000 & num) > 0 && (0b01000000 & num) === 0);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});