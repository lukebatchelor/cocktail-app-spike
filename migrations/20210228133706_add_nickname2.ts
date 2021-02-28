import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("User", (t) => {
    t.text("nickname2").after("nickname");
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("User", (t) => {
    t.dropColumn("nickname2");
  });
}

