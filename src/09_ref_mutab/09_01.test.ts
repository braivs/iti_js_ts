function IncreaseAge(u: UserType) {
  u.age++;
}

type UserType = {
  name: string
  age: number
  address: {title: string}
}

test('reference type test', () => {

  let user: UserType = {
      name: 'Briws',
      age: 34,
      address: {
        title: 'Querim'
      }
    }

  IncreaseAge(user)

  expect(user.age).toBe(35)

  const superman = user

  superman.age = 1000

  expect(user.age).toBe(1000)
})

test('array reference test', () => {

  let users = [
    {
      name: 'Briws',
      age: 34,
      address: {
        title: 'Querim'
      }
    },
    {
      name: 'Dimich',
      age: 32
    }
  ]
  let admins = users

  admins.push({name: 'Bandyugan', age: 10})

  expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {
  let usersCount = 100;

  let adminsCount = usersCount

  // adminsCount = adminsCount + 1;
  // Тоже самое что и:
  // adminsCount = 101
  adminsCount++;

  expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('reference type test 2', () => {

  let address = {
    title: 'Minsk'
  }

  let user: UserType = {
    name: 'Briws',
    age: 34,
    address: address
  }
  let addr = user.address

  let user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: address
  }

  address.title = 'Minsk City'

  expect(user.address).toBe(user2.address)
  expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', () => {
  let address = {
    title: 'Minsk'
  }

  let user: UserType = {
    name: 'Briws',
    age: 34,
    address: address
  }
  let user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: address
  }

  const users = [ user, user2, {name: 'Katya', age: 18, address: address}]

  const admins = [user, user2]

  admins[0].name = 'Dmitry'

  address.title = 'Minsk City'

  expect(users[0].name).toBe('Dmitry')
  expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {

  const letters = ['c', 'd', 'a', 'z', 'e']

  passportist(letters);

  expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])

} );

function passportist(letters: any) {
  const copy = [...letters].sort();
  console.log(copy)
}