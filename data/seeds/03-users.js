
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'username1', password: 'password1'},
        {id: 2, username: 'username2', password: 'password2'},
        {id: 3, username: 'username3', password: 'password3'}
      ]);
    });
};
