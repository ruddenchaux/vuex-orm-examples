import { Model } from '@vuex-orm/core'
import Todo from './Todo'

export default class User extends Model {
  static entity = 'users'

  static _conf = {
    http: {
      url: 'user'
    }
  }

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      todos: this.hasMany(Todo, 'user_id')
    }
  }
}
