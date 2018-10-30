exports.up = function(knex, Promise) {
    return knex.schema.createTable("list", list => {

       list
        .increments("id")
        .primary();
        list
            .string("listName")
            .notNullable();
        list
            .text("Description")
            .notNullable();
        list
          .integer("user_id")
          .notNullable()
          .references("id")
          .inTable("users");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("List");
  };