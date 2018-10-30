
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { id: 1, title: "title1", textBody: "textBody1" },
        { id: 2, title: "title2", textBody: "textBody2" },
        { id: 3, title: "title3", textBody: "textBody3" },
      ]);
    });
};
