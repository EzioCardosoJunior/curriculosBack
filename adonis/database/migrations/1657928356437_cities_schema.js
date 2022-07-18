'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitiesSchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('city', 64).notNullable()
      table.string('estado', 80).references('sigla').inTable('uf')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitiesSchema
