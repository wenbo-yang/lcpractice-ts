xdescribe('leetcode 780: reaching points', () => {
    function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
        //           (1, 2)
        //     (3, 2)        (1, 4)
        // (3, 5) (5, 2)   (5, 4) (1, 5)

        while (tx > sx && ty > sy && tx != ty) {
            if (tx > ty)
                tx %= ty;
            else
                ty %= tx;
        }
        if (tx == sx && ty == sy) return true;
        if (tx == sx) return ty > sy && (ty - sy) % tx == 0;
        if (ty == sy) return tx > sx && (tx - sx) % ty == 0;
        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
