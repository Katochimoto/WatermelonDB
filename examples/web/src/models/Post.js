import { Model } from '@rikishi/watermelondb'
import { field, relation, children, action } from '@rikishi/watermelondb/decorators'

export default class Post extends Model {
  static table = 'posts'

  static associations = {
    blogs: { type: 'belongs_to', key: 'blog_id' },
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }

  @field('title')
  title

  @field('subtitle')
  subtitle

  @field('body')
  body

  @relation('blogs', 'blog_id')
  blog

  @children('comments')
  comments

  @action async addComment(body) {
    return this.collections.get('comments').create(comment => {
      comment.post.set(this)
      comment.body = body
    })
  }
}
