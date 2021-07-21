declare module '@rikishi/watermelondb/decorators/text' {
  import { ColumnName } from '@rikishi/watermelondb'

  const text: (columnName: ColumnName) => PropertyDecorator

  export default text
}
