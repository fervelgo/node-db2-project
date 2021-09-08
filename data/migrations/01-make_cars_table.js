exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments()
    table.text('vin').required().unique()
    table.text('make').required()
    table.text('model').required()
    table.integer('mileage').required()
    table.text('title')
    table.text('transmission')
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
