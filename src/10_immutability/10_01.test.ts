import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from './10_01';



test('reference type test', () => {
  let user: UserType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim'
    }
  }

  const awesomeUser = makeHairStyle(user, 2)

  user = awesomeUser;

  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
  expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
  let user: UserWithLaptopType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const movedUser = moveUser(user, 'Querim')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.city).toBe('Querim')
})