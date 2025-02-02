xdescribe('leetcode 1271: to hexadecimal', () => {
    function toHexspeak(num: string): string {
        let hexString: string[] = parseInt(num).toString(16).split('');
        let result: string = '';
        for (let i = 0; i < hexString.length; ++i) {
            let char = hexString[i];
            
            if (char >= '2' && char <= '9') {
                return "ERROR";
            }
            hexString = hexString;
            if (char === '0') {
                hexString[i] = 'O';
            }
            else if (char === '1') {
                hexString[i] = 'I';
            }
            else {
                hexString[i] = char.toUpperCase();
            }
            result = hexString.join(''); 
        }
        // Return the converted hex string in hexspeak
        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
