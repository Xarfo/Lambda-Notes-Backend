
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {id: 1, list_name: 'list_name1', description: 'description1', user_id: 1},
        {id: 2, list_name: 'list_name2', description: 'description2', user_id: 1},
        {id: 3, list_name: 'list_name3', description: 'description3', user_id: 1}
      ]);
    });
};
