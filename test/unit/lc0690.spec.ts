xdescribe('leetcode 690: employee importance', () => {
     class Employee {
         id: number
         importance: number
         subordinates: number[]
         constructor(id: number, importance: number, subordinates: number[]) {
             this.id = (id === undefined) ? 0 : id;
             this.importance = (importance === undefined) ? 0 : importance;
             this.subordinates = (subordinates === undefined) ? [] : subordinates;
         }
     }
    
    
     function getImportance(employees: Employee[], id: number): number {
        const map = new Map<number, Employee>();

        for (const employee of employees) {
            map.set(employee.id, employee);
        }

        return getImportanceHelper(map, id);

     };

     function getImportanceHelper(map: Map<number, Employee>, id: number): number {
        const self = map.get(id);
        let sum =0
        if (self) {
            let sum = self.importance;

            for(const sub of self.subordinates) {
                sum += getImportanceHelper(map, sub);
            }
        }

        return sum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


