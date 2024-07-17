xdescribe('leetcode 9999: not yet part of leetcode', () => {
    // design in memory db that supports
    // insert row
    // delete row
    // search row on column value
    // create table

    class Row {
        private columnValues: string[] = [];
        constructor(columnValues: string[]) {
            this.columnValues = columnValues;
        }

        public get columns() {
            return this.columnValues;
        }

        public get(i: number): string {
            return this.columnValues[i];
        }

        public set(i: number, value: string) {
            if (i < 0 || i > this.columnValues.length) {
                return;
            }

            this.columnValues[i] = value;
        }
    }

    class Table {
        private tableToRowMap: Map<number, Row> = new Map();
        private lastId: number = 0;
        private columnNames: string[] = [];
        private indexColumns: number[] = [];
        private indexedMap: Map<string, Map<string, Set<number>>> = new Map();

        constructor(columnNames: string[]) {
            this.columnNames = columnNames;
        }

        public insert(columnValues: string[], id?: number) {
            let index = 0;
            const processedColValues = new Array<string>(this.columnNames.length).fill('').map((c) => columnValues[index++]);
            const rowId = id || ++this.lastId;
            this.tableToRowMap.set(id || ++this.lastId, new Row(processedColValues));
            this.insertIntoIndexedMap(columnValues, rowId);
        }

        private insertIntoIndexedMap(columnValues: string[], rowId: number) {
            for (const index in this.indexColumns) {
                const columnName = this.columnNames[index];
                const indexValueMap = this.indexedMap.get(columnName);
                const colValue = columnValues[index];

                if (indexValueMap) {
                    const indices = indexValueMap.get(colValue) || new Set();
                    const newSet = indices.add(rowId);
                    indexValueMap.set(colValue, newSet);
                }
            }
        }

        public get(id: number): string[] {
            return (this.tableToRowMap.get(id) || new Row([])).columns;
        }

        public update(id: number, columnValues: string[]) {
            this.deleteRow(id);
            this.insert(columnValues, id);
        }

        public query(columnName: string, columnValue: string): number[] {
            if (this.indexedMap.has(columnName)) {
                this.queryIndexed(columnName, columnValue);
            }
            return this.queryNonIndexed(columnName, columnValue);
        }

        private queryIndexed(columnName: string, columnValue: string): number[] {
            const indexValueMap = this.indexedMap.get(columnName);
            return Array.from(indexValueMap?.get(columnValue) || []);
        }

        private queryNonIndexed(columnName: string, columnValue: string): number[] {
            const index = this.columnNames.findIndex((c) => c === columnName);
            if (index === -1) {
                return [];
            }

            const retVal: number[] = [];

            for (const id of this.tableToRowMap.keys()) {
                const row = this.tableToRowMap.get(id);

                if (row && row.get(index) === columnValue) {
                    retVal.push(id);
                }
            }

            return retVal;
        }

        public deleteRow(id: number): void {
            this.removeFromIndexedMap(id);
            this.tableToRowMap.delete(id);
        }

        private removeFromIndexedMap(id: number): void {
            const row = this.tableToRowMap.get(id);
            if (row) {
                for (const columnName of this.indexedMap.keys()) {
                    const colIndex = this.columnNames.findIndex((c) => c === columnName);
                    const colValue = row.get(colIndex);
                    const valueIdMap = this.indexedMap.get(columnName);
                    if (colValue && valueIdMap) {
                        const indices = valueIdMap.get(colValue);

                        if (indices) {
                            indices.delete(id);
                        }
                    }
                }
            }
        }

        public insertIndex(columnName: string): void {
            if (this.indexedMap.has(columnName) || !this.columnNames.includes(columnName)) {
                return;
            }

            let index = this.columnNames.findIndex((t) => t === columnName);
            this.indexColumns.push(index);

            const indexValueMap: Map<string, Set<number>> = new Map();

            for (const id of this.tableToRowMap.keys()) {
                const row = this.tableToRowMap.get(id);

                if (row) {
                    let colValue = row.get(index);
                    indexValueMap.set(colValue, new Set([...(indexValueMap.get(colValue) || []), id]));
                }
            }

            this.indexedMap.set(columnName, indexValueMap);
        }
    }

    class InMemoryDB {
        public tables: Map<string, Table> = new Map();
        public name: string;

        constructor(name: string) {
            this.name = name;
        }

        public createTable(tableName: string, columnNames: string[]) {
            this.tables.set(tableName, new Table(columnNames));
        }

        public dropTable(tableName: string): void {
            this.tables.delete(tableName);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
