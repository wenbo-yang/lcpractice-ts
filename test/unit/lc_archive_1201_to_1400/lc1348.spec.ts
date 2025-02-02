xdescribe('leetcode 1348: tweetCounts per frequency', () => {

    class TweetCounts {
        private tweets = new Map<string, Set<number>>();

        constructor() {
        }
    
        recordTweet(tweetName: string, time: number): void {
            const set = this.tweets.get(tweetName) || new Set<number>();
            set.add(time);
            this.tweets.set(tweetName, set);
        }
    
        getTweetCountsPerFrequency(freq: string, tweetName: string, startTime: number, endTime: number): number[] {
            const freqInSeconds = this.convertFrequencyToSeconds(freq);
            const intervalCount = Math.floor((endTime - startTime) / freqInSeconds) + 1;
            const ans: number[] = new Array(intervalCount).fill(0);

            if (!this.tweets.has(tweetName)) {
                return ans;
            }

            const allTweetTimes = Array.from(this.tweets.get(tweetName)!);
            const relevantTweetTimes = allTweetTimes.filter(time => time >= startTime && time <= endTime);

            relevantTweetTimes.forEach(time => {
                const intervalIndex = Math.floor((time - startTime) / freqInSeconds);
                ans[intervalIndex]++;
            });

            return ans;
        }

        private convertFrequencyToSeconds(freq: string): number {
            switch (freq) {
                case "minute": return 60;
                case "hour": return 3600;
                case "day": return 86400;
                default: return 60;
            }
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
