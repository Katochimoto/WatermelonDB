import { Model } from '@rikishi/watermelondb'
import { field, relation } from '@rikishi/watermelondb/decorators'

export default class Comment extends Model {
  static table = 'comments'

  static associations = {
    posts: { type: 'belongs_to', key: 'post_id' },
  }

  @field('body')
  body

  @field('is_nasty')
  isNasty

  @relation('posts', 'post_id')
  post
}
