declare module '@rikishi/watermelondb/decorators/immutableRelation' {
  import { ColumnName, TableName } from '@rikishi/watermelondb'

  const immutableRelation: (
    relationTable: TableName<any>,
    relationIdColumn: ColumnName,
  ) => PropertyDecorator

  export default immutableRelation
}
