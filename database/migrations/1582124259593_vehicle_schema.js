'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehicleSchema extends Schema {
  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.string('placa', 6).notNullable().unique()
      table.integer('modelo', 10).notNullable()
      table.string('marca', 20).notNullable()
      table.string('color', 20).notNullable()
      table.integer('owner').unsigned().notNullable()
      table.foreign('owner').references('users.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehicleSchema
