import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return await  knex.schema.createTable('Recipe_ingregients_many', (table: Knex.TableBuilder) => {
    table.integer('Recipe_left_id').index();
    table.integer('Ingredient_right_id').index();
  })
}


export async function down(knex: Knex): Promise<void> {
  return await  knex.schema.dropTableIfExists('Recipe_ingregients_many');
}

