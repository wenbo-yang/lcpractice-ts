xdescribe('leetcode 535: encode and decode url', () => {
    class Solution {
        private static randPick: string[] = [];
        private static urlLength = 6;

        private codeToUrl = new Map<string, string>();
        private urlToCode = new Map<string, string>();
        constructor() {
            if (!Solution.randPick.length) {
                Solution.randPick = new Array<string>(10 + 26 + 26).fill('');
                for (let i = 0; i < 10; i++) {
                    Solution.randPick[i] = String.fromCharCode( i + '0'.charCodeAt(0));
                }
                
                for (let i = 10; i < 10 + 26; i++) {
                    Solution.randPick[i] = String.fromCharCode( i + 'a'.charCodeAt(0));
                }

                for (let i = 10 + 26; i < 10 + 26 + 26; i++) {
                    Solution.randPick[i] = String.fromCharCode( i + 'A'.charCodeAt(0));
                }
            }
        }

        /**
         * Encodes a URL to a shortened URL.
         */
        public encode(longUrl: string): string {
            if (!this.urlToCode.has(longUrl)) {
                
                let rand = '';

                for (let i = 0; i< Solution.urlLength; i++) {
                    rand += Solution.randPick[Math.floor(Math.random() * Solution.randPick.length)];
                }

                this.urlToCode.set(longUrl, 'http://tinyurl.com/' + rand);
                this.codeToUrl.set('http://tinyurl.com/' + rand, longUrl);

            }

            return this.urlToCode.get(longUrl) || '';
        };

        /**
         * Decodes a shortened URL to its original URL.
         */
        public decode(shortUrl: string): string {
            return this.codeToUrl.get(shortUrl) || '';
        };
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
