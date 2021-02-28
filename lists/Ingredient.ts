const { Text } = require('@keystonejs/fields');
import Access from '../util/access';

const Ingredient = {
  fields: {
    name: { type: Text},
  },
  access: {
    read: Access.userIsAdminOrOwner,
    update: Access.userIsAdminOrOwner,
    create: Access.userIsAdmin,
    delete: Access.userIsAdmin,
    auth: true,
  }
}

export default Ingredient;