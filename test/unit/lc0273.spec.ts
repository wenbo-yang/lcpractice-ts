xdescribe('leetcode 273: number to words', () => {
    class NumberToWords {
        private singleDigitMap: string[] = [
            '',
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
        ]

        private teenMap: string[] = [
            'Ten',
            'Eleven',
            'Twelve',
            'Thirteen',
            'Fourteen',
            'Fifteen',
            'Sixteen',
            'Seventeen',
            'Eighteen',
            'Ninteen',
        ]

        private doubleDigitMap: string[] = [
            'and',
            '',
            'Twenty',
            'Thirty',
            'Fourty',
            'Fifty',
            'Sixty',
            'Seventy',
            'Eighty',
            'Ninty'
        ]

        private thousandMap: string[] = [
            '',
            'Thousand',
            'Million',
            'Trillion',
            'Quadrillion',
            'Quintillion',
            'Sextillion',
            'Septillion'
        ]

        private num: string[];
        constructor(num: number) {
            this.num = num.toString().split('');
        }

        public convertNumberToWord() {

            const resultsBreakdown: string[] = [];
            while (this.num.length >= 3) {
                const end = this.num.length;

                resultsBreakdown.push(this.pronounceThreeDigit(this.num[end - 2 ] + this.num[end - 1] + this.num[end]));
                this.num.pop();
                this.num.pop();
                this.num.pop();
            }

            if (this.num.length === 2) {
                resultsBreakdown.push(this.pronounceDoubleDigit(this.num.join('')));
            }

            if (this.num.length === 1) {
                resultsBreakdown.push(this.pronounceDoubleDigit(this.num.join('') || 'Zero'));
            }

            for (let i = resultsBreakdown.length - 1; i >= 1; i ++) {
                resultsBreakdown[i] = resultsBreakdown[i] + ' ' + this.thousandMap[i];
            }

            return resultsBreakdown.reverse().join(' ');
        }

        private pronounceThreeDigit(num: string): string {   
            let result = ''
            
            if (Number(num) >= 100) {
                result = this.prounceSingleDigit(num[0]);
            }

            return result + ' ' + this.pronounceDoubleDigit(num[1] + num[2])
        }

        private prounceSingleDigit(num: string): string {
            return this.singleDigitMap[Number(num)];
        }

        private pronounceDoubleDigit(num: string): string {
            let result = '';
            
            if (num[0] === '1') {
                return this.teenMap[Number(num) - 10];
            }

            const single = this.prounceSingleDigit(num[1])

            return this.doubleDigitMap[Number(num[0])] + single ? ' ' + single : '';
        }
    }

    function numberToWords(num: number): string {
        const result = new NumberToWords(num).convertNumberToWord();

        return result;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
