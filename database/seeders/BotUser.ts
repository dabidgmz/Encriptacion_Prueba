import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class BotUserSeeder extends BaseSeeder {
  public async run () {
    const users = [
      {
        name: 'David',
        email: 'david@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Dario',
        email: 'dario@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Ricardo',
        email: 'ricardo@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Rene',
        email: 'rene@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Kiara',
        email: 'Kiara@example.com',
        password: await Hash.make('12345678') 
      },
      {
        name: 'Ariadna',
        email: 'Ari@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Jhon',
        email: 'jhon@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Vicky',
        email: 'vicky@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'Jafet',
        email: 'jafet@example.com',
        password: await Hash.make('12345678')
      },
      {
        name: 'ivan',
        email: 'ivan@example.com',
        password: await Hash.make('12345678')
      }
    ]

    await User.createMany(users)
  }
}
/*
  Ejecutar lo siguiente :
  node ace db:seed
*/
