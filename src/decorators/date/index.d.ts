declare module '@rikishi/watermelondb/decorators/date' {
  import { ColumnName } from '@rikishi/watermelondb'

  const date: (columnName: ColumnName) => PropertyDecorator
  export default date
}
