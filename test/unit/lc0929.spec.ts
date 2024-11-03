xdescribe('leetcode 929: unique email addresses', () => {
    function numUniqueEmails(emails: string[]): number {
        const set = new Set<string>();

        for (const email of emails) {
            const [local, domain] = email.split('@');
            const modifiedLocal = local.split('+')[0].replace('.','');
            set.add(modifiedLocal + '@' + domain);
        }

        return set.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
