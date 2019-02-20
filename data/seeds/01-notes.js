
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'Backend Part 1 - Relational Database', content: 'Add data persistence using a Relational Database. We suggest you start with SQLite3.'},
        {title: 'Backend Part 2 - Web Api', content: 'Create a Web API for the React application you built in the front-end project week.'},
        {title: 'Backend Part 3 - Build Endpoint', content: '1) Display a list of notes, 2) Create a note with a title and content, 3) View an existing note, 4) Edit an existing note, 5) Delete an existing note, 6) Modify your front-end so that it uses your newly created Web API.'}
      ]);
    });
};
