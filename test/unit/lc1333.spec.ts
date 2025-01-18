xdescribe('leetcode 1333: filter restaurants by vegan-friendly price and distance', () => {
    function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
        return restaurants.filter(r => r[2] === veganFriendly && r[3] <= maxPrice && r[4] <= maxDistance).sort(
            (a, b) => {
                if (a[1] < b[1]) {
                    return -1;
                }
                
                if (a[1] > b[1]) {
                    return 1;
                }

                return a[0] - b[0];
            }
        ).map(r => r[0]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
