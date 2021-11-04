declare module '@rikishi/watermelondb/RawRecord' {
  import { ColumnName, ColumnSchema, RecordId, TableSchema } from '@rikishi/watermelondb'
  import { SyncStatus } from '@rikishi/watermelondb/Model'

  export type DirtyRaw = { [id: string]: any }

  export interface RawRecord {
    id: RecordId
    _status: SyncStatus
    _changed: string
    last_modified: number | null
  }

  export function sanitizedRaw(dirtyRaw: DirtyRaw, tableSchema: TableSchema): RawRecord

  export function setRawSanitized(
    rawRecord: RawRecord,
    columnName: ColumnName,
    value: any,
    columnSchema: ColumnSchema,
  ): void
}
