declare module '@rikishi/watermelondb/Model/helper' {
  import { Model } from '@rikishi/watermelondb'

  export const hasUpdatedAt: (obj: Object) => boolean

  export const createTimestampsFor: (
    model: Model,
  ) => {
    created_at: Date
    updated_at: Date
  }

  export function addToRawSet(rawSet: string | void, value: string): string
}
