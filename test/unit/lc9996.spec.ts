describe('leetcode 9996: query database', () => {
    class Row {
        public columnValues: string[] = [];
        constructor(columnValues: string[]) {
            this.columnValues = columnValues;
        }

        public get columns() {
            return this.columnValues;
        }

        public get(colIndex: number): string {
            return this.columnValues[colIndex];
        }

        public set(colIndex: number, value: string) {
            if (colIndex < 0 || colIndex > this.columnValues.length) {
                return;
            }

            this.columnValues[colIndex] = value;
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

        public getRow(id: number): string[] {
            return (this.tableToRowMap.get(id) || new Row([])).columns;
        }

        public getRows(): Iterable<Row> {
            return this.tableToRowMap.values();
        }

        public getColumnNames(): string[] {
            return this.columnNames;
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

        public deleteRow(id: number) {
            this.removeFromIndexedMap(id);
            this.tableToRowMap.delete(id);
        }

        private removeFromIndexedMap(id: number) {
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

        public insertIndex(columnName: string) {
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

    class InMemoryDB implements IDatabase {
        public tables: Map<string, Table> = new Map();
        public name: string;

        constructor(name: string) {
            this.name = name;
        }

        public createTable(tableName: string, columnNames: string[]): void {
            this.tables.set(tableName, new Table(columnNames));
        }

        public dropTable(tableName: string): void {
            this.tables.delete(tableName);
        }

        public getTables(): Map<string, Table> {
            return this.tables;
        }

        public getTable(tableName: string): Table | undefined {
            return this.tables.get(tableName);
        }
    }

    interface IDatabase {
        createTable(tableName: string, columnNames: string[]): void;
        dropTable(tableName: string): void;
        getTables(): Map<string, Table>;
        getTable(tableName: string): Table | undefined;
    }

    class Query {
        private db: IDatabase;

        constructor(db: IDatabase) {
            this.db = db;
        }

        public from(tableName: string): TableQuery {
            const table = this.db.getTable(tableName);
            return table ? new TableQuery(table) : this.noTableFoundError(tableName);
        }

        private noTableFoundError(tableName: string): TableQuery {
            throw new Error('No table with name ' + tableName);
        }
    }

    class TableQuery {
        private table: Table;
        constructor(table: Table) {
            this.table = table;
        }

        where(operations: IColumnValueOperation[]): RowQuery {
            if (operations.length > 1) {
                throw new Error('not implemented');
            }

            let rowsArray: Row[] = [];

            for (const operation of operations) {
                if (operation.operator === COLUMNNAMEVALUEOPERATION.EQUALS) {
                    rowsArray = this.equalsFilter(operation.columnName, operation.columnValue);
                }
            }

            console.log(this);

            return new RowQuery(this.table.getColumnNames(), rowsArray);
        }

        private equalsFilter(columnName: string, columnValue: string): Row[] {
            const rows = this.table.getRows();
            const result: Row[] = [];
            const colIndex = this.table.getColumnNames().findIndex((c) => c === columnName);

            for (const row of rows) {
                if (row.get(colIndex) === columnValue) {
                    result.push(row);
                }
            }

            return result;
        }
    }

    class RowQuery {
        private columnNames: string[];
        private rows: Row[];
        constructor(columnNames: string[], rows: Row[]) {
            this.rows = rows;
            this.columnNames = columnNames;
        }

        orderBy(columnName: string, desc?: boolean): RowQuery {
            const colIndex = this.columnNames.findIndex((c) => c === columnName);

            if (colIndex === -1) {
                throw new Error('Column Name: ' + columnName + 'not found');
            }

            if (desc) {
                this.rows.sort((a, b) => (b.get(colIndex) > a.get(colIndex) ? 1 : -1));
            } else {
                this.rows.sort((a, b) => (a.get(colIndex) > b.get(colIndex) ? 1 : -1));
            }

            return this;
        }

        select(selectColumns: string[]): string[][] {
            const result: Array<Array<string>> = [];

            result.push(selectColumns);

            for (const row of this.rows) {
                const presentableRow: string[] = [];
                for (const col of selectColumns) {
                    const colIndex = this.columnNames.findIndex((c) => c === col);
                    presentableRow.push(row.get(colIndex));
                }

                result.push(presentableRow);
            }

            return result;
        }
    }

    enum COLUMNNAMEVALUEOPERATION {
        EQUALS = 'EQUALS',
    }

    interface IColumnValueOperation {
        columnName: string;
        columnValue: string;
        operator: COLUMNNAMEVALUEOPERATION;
        // next?: LOGICALOPERATOR;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {
        const testTableColumns = ['col1', 'col2'];
        const testTableName = 'myTestTable';
        const testWhereOperation: IColumnValueOperation[] = [{ columnName: 'col1', columnValue: '123', operator: COLUMNNAMEVALUEOPERATION.EQUALS }];

        const db = new InMemoryDB('myDB');
        db.createTable(testTableName, testTableColumns);
        const table = db.getTable(testTableName) || new Table(testTableColumns);
        table.insert(['123', '321']);
        table.insert(['123', '456']);
        table.insert(['456', '654']);

        const queryResult = new Query(db).from(testTableName).where(testWhereOperation).orderBy(testTableColumns[1]).select(testTableColumns);

        console.log(queryResult);
    });
});
