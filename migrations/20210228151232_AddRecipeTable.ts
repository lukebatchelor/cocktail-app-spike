import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await  knex.schema.createTable('Recipe', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.text('name').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return await  knex.schema.dropTableIfExists('Recipe');
}

