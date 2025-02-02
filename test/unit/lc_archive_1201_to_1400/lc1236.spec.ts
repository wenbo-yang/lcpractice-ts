xdescribe('leetcode 1236: web crawler', () => {
    interface HtmlParser {
        getUrls(url: string): string[];
    }
    
    const crawledUrls: string[] = [];
    const visitedUrls: Set<string> = new Set();
    
    function crawl(startUrl: string, htmlParser: HtmlParser): string[] {
        dfsCrawl(startUrl, htmlParser);
        return crawledUrls;
    }
    
    function dfsCrawl(url: string, htmlParser: HtmlParser): void {
        if (visitedUrls.has(url)) {
            return;
        }
        
        visitedUrls.add(url);
        crawledUrls.push(url);
        
        const urlsFromPage = htmlParser.getUrls(url);
        for (const nextUrl of urlsFromPage) {
            if (extractHostName(url) === extractHostName(nextUrl)) {
                dfsCrawl(nextUrl, htmlParser);
            }
        }
    }
    
    function extractHostName(url: string): string {
        const hostNameStartIndex = "http://".length;
        let hostName: string = ""; 
        
        for (let index = hostNameStartIndex; index < url.length; index++) {
            if (url[index] === '/') {
                break;
            }
            hostName += url[index];
        }
    
        return hostName;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
