xdescribe('leetcode 1352: product of last k numbers', () => {
    
    class ProductOfNumbers {
        private prefixProducts: number[] = [];
        constructor() {
        }
    
        add(num: number): void {
            if (num === 0) {
                // If number is zero, reset the prefixProducts array as any subsequent product will be 0.
                this.prefixProducts = [1];
            } else {
                // Calculate the new product based on the last element and add it to the prefixProducts array.
                const newProduct = this.prefixProducts[this.prefixProducts.length - 1] * num;
                this.prefixProducts.push(newProduct);
            }
        }
    
        getProduct(k: number): number {
            const size = this.prefixProducts.length;
            if (size <= k) {
                return 0;
            } else {
                const product = this.prefixProducts[size - 1] / this.prefixProducts[size - k - 1];
                return product;
            }
        }
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
