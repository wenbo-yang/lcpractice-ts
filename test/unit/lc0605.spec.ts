xdescribe('leetcode 605: flower bed', () => {
    function canPlaceFlowers(flowerbed: number[], n: number): boolean {
        let l = 0;

        while (l < flowerbed.length && n > 0) {
            if (flowerbed[l] !== 1 && flowerbed[l - 1] !== 1 && flowerbed[l + 1] !== 1) {
                n--;
                flowerbed[l] = 1;
            }

            l++;
        }

        return n === 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
