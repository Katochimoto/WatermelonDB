declare module '@rikishi/watermelondb/decorators/field' {
  import { ColumnName } from '@rikishi/watermelondb'

  const field: (columnName: ColumnName) => PropertyDecorator
  export default field
}
