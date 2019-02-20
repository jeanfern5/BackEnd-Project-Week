const db = require('../dbConfig.js');

module.exports = {

    get: function() {
        return db('notes');
    },

    getById: function(id) {
        return db('notes')
            .where({id})
            .first();
    },

    insert: function(note) {
        return db('notes')
            .insert(note)
    },

    update: function(id, changes) {
        return db('notes')
            .where({id})
            .update(changes);
    },

    remove: function(id) {
        return db('notes')
            .where({id})
            .del();
    }
}