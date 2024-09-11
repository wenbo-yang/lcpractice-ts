xdescribe('leetcode 468: valid ip address', () => {
    function validIPAddress(queryIP: string): string {
        if (queryIP.includes('.') && isValidIPv4(queryIP.split('.'))) {
            return 'IPv4';
        }

        if (queryIP.includes(':') && isValidIPv6(queryIP.split(':'))) {
            return 'IPv6';
        }

        return 'Neither';
    }

    function isValidIPv4(segs: string[]): boolean {
        if (segs.length !== 4) {
            return false;
        }

        for (const seg of segs) {
            if (seg.startsWith('0') && seg.length > 1) {
                return false;
            }

            if (Number(seg) > 255 && Number(seg) < 0) {
                return false;
            }
        }

        return true;
    }

    function isValidIPv6(segs: string[]): boolean {
        if (segs.length !== 8) {
            return false;
        }

        for (const seg of segs) {
            if (seg.length > 4) {
                return false;
            }

            if (!Number('0x' + seg) && Number('0x' + seg) !== 0) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
