xdescribe('leetcode 165: compare version number', () => {
    function compareVersion(version1: string, version2: string): number {
        const v1Array = version1.split('.');
        const v2Array = version2.split('.');

        const longer = v1Array.length > v2Array.length ? v1Array.length : v2Array.length;

        for (let i = 0; i < longer; i++) {
            let v1 = '0';
            let v2 = '0';
            if (i < v1Array.length) {
                v1 = v1Array[i];
            }

            if (i < v2Array.length) {
                v2 = v2Array[i];
            }

            if (Number(v1) !== Number(v2)) {
                return Number(v1) > Number(v2) ? 1 : -1;
            }
        }

        return 0;
    }

    it('test case 1 version1 = "1.2", version2 = "1.10":, output -1 ', () => {
        expect(compareVersion('1.2', '1.10')).toEqual(-1);
    });

    it('test case 2 version1 = "1.001", version2 = "1.01":,output 1', () => {
        expect(compareVersion('1.001', '1.01')).toEqual(0);
    });

    it('test case 3 version1 = "1.0.0.0", version2 = "1.0":,output 1', () => {
        expect(compareVersion('1.0.0.0', '1.0')).toEqual(0);
    });
});
