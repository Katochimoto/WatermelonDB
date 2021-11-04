declare module '@rikishi/watermelondb/Query/helpers' {
  import { QueryDescription } from '@rikishi/watermelondb/QueryDescription'
  import { TableName } from '@rikishi/watermelondb'
  import { AssociationInfo, Associations } from '@rikishi/watermelondb/Model'

  export const getSecondaryTables: QueryDescription

  export const getAssociations: (
    table: TableName<any>[],
    associations: Associations,
  ) => [TableName<any>, AssociationInfo][]
}
