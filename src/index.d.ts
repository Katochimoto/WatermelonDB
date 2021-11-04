declare module '@rikishi/watermelondb' {
  import * as Q from '@rikishi/watermelondb/QueryDescription'
  import Database from '@rikishi/watermelondb/Database'

  export { default as Collection } from '@rikishi/watermelondb/Collection'
  // export { default as Database } from '@rikishi/watermelondb/Database'
  export { default as CollectionMap } from '@rikishi/watermelondb/Database/CollectionMap'
  export { default as Relation } from '@rikishi/watermelondb/Relation'
  export { default as Model, associations } from '@rikishi/watermelondb/Model'
  export { default as Query } from '@rikishi/watermelondb/Query'
  export { tableName, columnName, appSchema, tableSchema } from '@rikishi/watermelondb/Schema'

  export { DatabaseAdapter } from '@rikishi/watermelondb/adapters/type'
  export { RawRecord, DirtyRaw } from '@rikishi/watermelondb/RawRecord'
  export { RecordId } from '@rikishi/watermelondb/Model'
  export {
    TableName,
    ColumnName,
    ColumnType,
    ColumnSchema,
    TableSchema,
    AppSchema,
  } from '@rikishi/watermelondb/Schema'

  export { Q, Database }
}
