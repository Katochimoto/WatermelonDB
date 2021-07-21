declare module '@rikishi/watermelondb/decorators/children' {
  import { TableName } from '@rikishi/watermelondb'

  const children: (childTable: TableName<any>) => PropertyDecorator
  export default children
}
