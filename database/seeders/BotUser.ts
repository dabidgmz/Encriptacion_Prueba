import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import crypto from 'crypto'

export default class BotUserSeeder extends BaseSeeder {
  public async run () {
    const users = [
      {
        name: 'David',
        email: 'david@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Dario',
        email: 'dario@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Ricardo',
        email: 'ricardo@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Rene',
        email: 'rene@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Kiara',
        email: 'Kiara@example.com',
        password: await Hash.make('12345678') ,
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Ariadna',
        email: 'Ari@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Jhon',
        email: 'jhon@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Vicky',
        email: 'vicky@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'Jafet',
        email: 'jafet@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      },
      {
        name: 'ivan',
        email: 'ivan@example.com',
        password: await Hash.make('12345678'),
        confirmationCode: crypto.randomBytes(20).toString('hex'), // Genera un código aleatorio
        isConfirmed: false
      }
    ]

    await User.createMany(users)
  }
}
/*
  Ejecutar lo siguiente :
  node ace db:seed
*/
