declare module '@rikishi/watermelondb/observation/observeQuery' {
  import { Model, Query } from '@rikishi/watermelondb'
  import { Observable } from 'rxjs'

  export default function observeQuery<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
