exports.up = function(knex, Promise) {
    return knex.schema.createTable("notes", notes => {

      notes
        .increments("id")
        .primary();
      notes
        .string("title", 128)
        .notNullable();
      notes
        .text("textBody")
        .notNullable();
      notes
        .timestamps();  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("Notes");
  };