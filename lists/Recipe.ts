const { Text } = require('@keystonejs/fields');
import { Relationship } from '@keystonejs/fields';
import Access from '../util/access';

const Recipe = {
  fields: {
    name: { type: Text},
    ingregients: {type: Relationship, ref: 'Ingredient', many: true}
  },
  access: {
    read: Access.userIsAdminOrOwner,
    update: Access.userIsAdminOrOwner,
    create: Access.userIsAdmin,
    delete: Access.userIsAdmin,
    auth: true,
  }
}

export default Recipe;