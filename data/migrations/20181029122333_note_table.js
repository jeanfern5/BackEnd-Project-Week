
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(notes) {
    notes.increments();

    notes
        .string('title', 200)
        .notNullable()
        .unique();

    notes
        .text('content')
        .notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
