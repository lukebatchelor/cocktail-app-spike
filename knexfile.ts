// Update with your config settings.
require('ts-node/register');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'cocktail_app_spike',
      user:     'keystone5',
      password: 'change_me_plz'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'cocktail_app_spike',
      user:     'keystone5',
      password: 'change_me_plz'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

};
