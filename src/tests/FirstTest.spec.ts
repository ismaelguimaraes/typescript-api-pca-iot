import { User } from '../app/models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Ismael'

  expect(user.name).toEqual('Ismael')
})
