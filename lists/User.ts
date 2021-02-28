import { Text, Checkbox, Password } from '@keystonejs/fields';
import Access from '../util/access';

const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: Access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: Access.userIsAdminOrOwner,
    update: Access.userIsAdminOrOwner,
    create: Access.userIsAdmin,
    delete: Access.userIsAdmin,
    auth: true,
  },
}

export default User;