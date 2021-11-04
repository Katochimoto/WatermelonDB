declare module '@rikishi/watermelondb/decorators/relation' {
  import { ColumnName, TableName } from '@rikishi/watermelondb'
  import { Options } from '@rikishi/watermelondb/Relation'

  const relation: (
    relationTable: TableName<any>,
    relationIdColumn: ColumnName,
    options?: Options,
  ) => PropertyDecorator

  export default relation
}
