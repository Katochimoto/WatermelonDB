declare module '@rikishi/watermelondb/decorators/common' {
  import { ColumnName } from '@rikishi/watermelondb'

  export function ensureDecoratorUsedProperly(
    columnName: ColumnName,
    target: Object,
    key: string,
    descriptor: Object,
  ): void
}
