xdescribe('leetcode 1242: web crawler multithreaded', () => {
    class HtmlParser {
        getUrls(s: string): string[] {
            throw new Error('Not implemented');
        }
    }
    
    const htmlParser = new HtmlParser();
    const startUrl = 'someUrl';
    const urls: string[] = [];
    let list = htmlParser.getUrls(startUrl)
    let host = startUrl.split("/")[2];
    let visited = new Set([startUrl])
    let queue = [startUrl]
    
    // Crawler worker
    const worker=(url: string)=>{
        // Check if URL has been visited
        if (visited.has(url)){
            return
        }
        // Check if URL is same host
        if(url.indexOf(`http://${host}`)!== 0){
            return
        }
        // Add to visited
        visited.add(url);
        let urls = htmlParser.getUrls(url)
        urls.forEach(worker)
    }
    
    // Iterate over each list item
    for (let i=0; i < list.length;i++){
        worker(list[i])
    }
    
    // Return final result from visited set
    return [...visited]

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
