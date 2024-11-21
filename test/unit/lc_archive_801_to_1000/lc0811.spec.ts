xdescribe('leetcode 811: subdomain visit count', () => {
    function subdomainVisits(cpdomains: string[]): string[] {
        const domainVisitCounts: Record<string, number> = {};
  
        cpdomains.forEach(cpdomain => {
            const spaceIndex = cpdomain.indexOf(' ');
            const visitCount = parseInt(cpdomain.substring(0, spaceIndex), 10);

            let domain = cpdomain.substring(spaceIndex + 1);

            while (domain) {
                domainVisitCounts[domain] = (domainVisitCounts[domain] || 0) + visitCount;

                const dotIndex = domain.indexOf('.');

                if (dotIndex < 0) break;

                domain = domain.substring(dotIndex + 1);
            }
        });

        const results: string[] = [];

        for (const domain in domainVisitCounts) {
            const count = domainVisitCounts[domain];
            results.push(`${count} ${domain}`);
        }
        
        return results;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
