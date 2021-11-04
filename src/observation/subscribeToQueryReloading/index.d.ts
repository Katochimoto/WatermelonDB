declare module '@rikishi/watermelondb/observation/reloadingObserver' {
  import { Model, Query } from '@rikishi/watermelondb'
  import { Observable } from 'rxjs'

  export default function reloadingObserver<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
