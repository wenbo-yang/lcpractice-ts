import { MaxHeap } from './commonLibs';

xdescribe('leetcode 1169: invalid transactions', () => {
    type TransactionData = {
        time: number;
        city: string;
        index: number;
    };
    function invalidTransactions(transactions: string[]): string[] {
        const transactionsMap: Record<string, TransactionData[]> = {};
        const invalidIndexes = new Set<number>();
    
        // Loop through each transaction to parse and process it.
        transactions.forEach((transaction, index) => {
            // Split the transaction into components [name, time, amount, city].
            const elements = split(transaction, ',');
            // Extract and parse transaction components.
            const name = elements[0];
            const time = parseInt(elements[1], 10);
            const amount = parseInt(elements[2], 10);
            const city = elements[3];
    
            // Initialize transactions for the user if not present.
            if (!transactionsMap[name]) {
                transactionsMap[name] = [];
            }
          
            // Store transaction data for future reference.
            transactionsMap[name].push({ time: time, city: city, index: index });
    
            // If the transaction amount is over 1000, it's invalid.
            if (amount > 1000) {
                invalidIndexes.add(index);
            }
    
            // Check other transactions for the same user for validity.
            transactionsMap[name].forEach(({ time: recordedTime, city: recordedCity, index: transactionIndex }) => {
                // If cities are different and times are within 60 minutes, mark as invalid.
                if (recordedCity !== city && Math.abs(time - recordedTime) <= 60) {
                    invalidIndexes.add(index);
                    invalidIndexes.add(transactionIndex);
                }
            });
        });
      
        // Prepare the result array with invalid transactions using the invalidated indexes.
        const result = Array.from(invalidIndexes).map(index => transactions[index]);
      
        return result;
    };

    function split(str: string, delimiter: string): string[] {
        return str.split(delimiter);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
