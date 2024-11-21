xdescribe('leetcode 950: description', () => {
    function deckRevealedIncreasing(deck: number[]): number[] {
        deck.sort((a, b) => b - a);

        const deque: number[] = [];

        for (const card of deck) {
            if (deque.length > 0) {
                deque.unshift(deque.pop()!);
            }
            deque.unshift(card);
        }
    
        return deque;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
