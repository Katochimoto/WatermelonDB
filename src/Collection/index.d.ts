declare module '@rikishi/watermelondb/Collection' {
  import { Database, Model, Query, RecordId, TableName, TableSchema } from '@rikishi/watermelondb'
  import { Clause } from '@rikishi/watermelondb/QueryDescription'
  import { Class } from '@rikishi/watermelondb/utils/common'
  import { Observable, Subject } from 'rxjs'

  type CollectionChangeType = 'created' | 'updated' | 'destroyed'
  export interface CollectionChange<Record extends Model> {
    record: Record
    type: CollectionChangeType
  }

  export type CollectionChangeSet<Record extends Model> = CollectionChange<Record>[]

  export default class Collection<Record extends Model> {
    public database: Database

    public modelClass: Class<Record>

    public changes: Subject<CollectionChangeSet<Record>>

    public table: TableName<Record>

    public schema: TableSchema

    public constructor(database: Database, ModelClass: Class<Record>)

    public find(id: RecordId): Promise<Record>

    public findAndObserve(id: RecordId): Observable<Record>

    public query(...conditions: Clause[]): Query<Record>

    public unsafeFetchRecordsWithSQL(sql: string): Promise<Record[]>

    public create(recordBuilder?: (record: Record) => void): Promise<Record>

    public prepareCreate(recordBuilder?: (record: Record) => void): Record
  }
}
