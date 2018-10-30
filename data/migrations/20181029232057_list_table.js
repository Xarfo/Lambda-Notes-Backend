exports.up = function(knex, Promise) {
    return knex.schema.createTable("list", list => {

       list
            .increments("id")
            .primary();
        list
            .string("listName")
            .notNullable();
        list
            .text("description")
            .notNullable();
        list
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users");
        list
            .timestamps();  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("List");
  };
