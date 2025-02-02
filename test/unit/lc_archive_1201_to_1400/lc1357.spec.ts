xdescribe('leetcode 1357: apply discount every n orders', () => {
    type ProductPriceMap = { [productId: number]: number };

    class Cashier {
        private customerCount = 0;
        private checkoutFrequency: number = 0;
        private discountPercentage: number;
        private productPrices: ProductPriceMap = {}; // 
        constructor(n: number, discount: number, products: number[], prices: number[]) {
            this.customerCount = 0;
            this.checkoutFrequency = n;
            this.discountPercentage = discount;

            products.forEach((productId, index) => {
                this.productPrices[productId] = prices[index];
            });
        }
    
        getBill(product: number[], amount: number[]): number {
            this.customerCount++;
            const isDiscountEligible: boolean = this.customerCount % this.checkoutFrequency === 0;
            let totalCost = 0;
        
            product.forEach((productId, index) => {
                const productPrice = this.productPrices[productId];
                totalCost += productPrice * amount[index];
            });
        
            if (isDiscountEligible) {
                const discountAmount = (totalCost * this.discountPercentage) / 100;
                totalCost -= discountAmount;
            }
        
            return totalCost;
        }
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
