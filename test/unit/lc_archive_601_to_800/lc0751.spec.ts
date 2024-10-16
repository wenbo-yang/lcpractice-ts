xdescribe('leetcode 751: description', () => {
    function ipToCIDR(ip: string, n: number): string[] {
        let ipStart = ipToLong(ip);
        let ipEnd = ipStart + n;
        const list: string[] = [];
        let ipCur = ipStart;
        while (ipCur < ipEnd) {
            let lowestBit = ipCur && 1;
            while (ipCur + lowestBit > ipEnd)
                lowestBit /= 2;
            let bitNum = Math.floor((Math.log(lowestBit) / Math.log(2)));
            let block = longToIP(ipCur) + "/" + (32 - bitNum);
            list.push(block);
            ipCur += lowestBit;
        }
        return list;
    }

    function ipToLong(ip: string): number {
        const array: string[] = ip.split("\\.");
        let ipLong = 0;
        let length = array.length;
        for (let i = 0; i < length; i++) {
            ipLong <<= 8;
            ipLong += Number(array[i]);
        }
        return ipLong;
    }

    function longToIP(num: number): string {
        const array = [0,0,0,0];
        for (let i = 3; i >= 0; i--) {
            let remainder = num % 256;
            array[i] = remainder;
            num /= 256;
        }
        
        return array.join('.');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
