declare module '@rikishi/watermelondb/Relation/helpers' {
  import { Model, Relation } from '@rikishi/watermelondb'
  import { Observable } from 'rxjs'

  export function getImmutableObservable<T extends Model>(
    relation: Relation<T>,
  ): Observable<T | undefined>

  export function getObservable<T extends Model>(relation: Relation<T>): Observable<T | undefined>

  export function createObservable<T extends Model>(
    relation: Relation<T>,
  ): Observable<T | undefined>
}
