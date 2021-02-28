import { Keystone } from '@keystonejs/keystone';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import initialiseData from './initial-data';

import { KnexAdapter as Adapter } from '@keystonejs/adapter-knex';

import User from './lists/User';
import Ingredient from './lists/Ingredient';

const PROJECT_NAME = 'Cocktail App Spike';
const adapterConfig = {
  knexOptions: {
    connection: 'postgres://keystone5:password@localhost/cocktail_app_spike',
  },
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  // @ts-ignore
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

keystone.createList('User', User);
keystone.createList('Ingredient', Ingredient);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
      pages: [],
    }),
  ],
};
