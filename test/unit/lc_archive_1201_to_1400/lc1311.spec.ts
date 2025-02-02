xdescribe('leetcode 1311: get watched videos by your friends', () => {
    type FriendVideoWatchlist = {
        watchedVideos: string[][],
        friends: number[][],
        id: number,
        level: number
    };

    function watchedVideosByFriends(watchedVideos: string[][], friends: number[][], id: number, level: number): string[] {
        const totalFriends = friends.length; 
        const visited = new Array(totalFriends).fill(false); 
        const queue: number[] = []; 
    
        queue.push(id);
        visited[id] = true;
    
        while (level > 0) {
            let size = queue.length;
            for (let i = 0; i < size; ++i) {
                const currentFriend = queue.shift()!; // The non-null assertion is for TypeScript

                for (let friendId of friends[currentFriend]) {
                    if (!visited[friendId]) {
                        queue.push(friendId);
                        visited[friendId] = true;
                    }
                }
            }
            level -= 1; // Decrement level after finishing a BFS level
        }
    
        const frequencyMap: Record<string, number> = {};
        while (queue.length > 0) {
            const friendAtLevel = queue.shift()!;
            for (let video of watchedVideos[friendAtLevel]) {
                frequencyMap[video] = (frequencyMap[video] || 0) + 1;
            }
        }
    
        const sortedVideos: string[] = Object.keys(frequencyMap)
            .sort((a, b) => {
                if (frequencyMap[a] !== frequencyMap[b]) {
                    return frequencyMap[a] - frequencyMap[b];
                }
                return a.localeCompare(b);
            });
        return sortedVideos;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
