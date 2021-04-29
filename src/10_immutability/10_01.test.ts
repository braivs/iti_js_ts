import {
  addCompany,
  addNewBooksToUser,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse, removeBook, updateBook, updateSkill,
  upgradeUserLaptop,
  UserType,
  UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from './10_01';



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

test('upgrade laptop to macbook', () => {
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

  const userCopy = upgradeUserLaptop(user, 'Macbook')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(userCopy.laptop.title).toBe('Macbook')
  expect(user.laptop.title).toBe('ZenBook')
})

test('change user house number', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = moveUserToOtherHouse(user, 99)

  expect(user).not.toBe(userCopy)
  expect(user.books).toBe(userCopy.books)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).not.toBe(userCopy.address)
  expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = addNewBooksToUser(user, 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[4]).toBe('ts')
  expect(user.books.length).toBe(4)
})

test('update js to ts', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = updateBook(user, 'js', 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('ts')
  expect(user.books.length).toBe(4)
})

test('update skill level', () => {
  let user: UserWithSkillsType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    skills: ['80%', '35%', '47%', '100%']
  }

  const userCopy = updateSkill(user, '35%', '55%')

  expect(user).not.toBe(userCopy)
  expect(user.skills).not.toBe(userCopy.skills)
  expect(userCopy.skills[1]).toBe('55%')
  expect(user.skills.length).toBe(4)
})

test('remove js book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('react')
})

test('add new Company', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Briws',
    hair: 32,
    address: {
      city: 'Querim',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    companies: [
      {id: 1, title: 'Epam'},
      {id: 2, title: 'It-incubator'}
    ]
  }

  const userCopy = addCompany(user, 3, 'Google');

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.companies).not.toBe(userCopy.companies)
  expect(userCopy.companies.length).toBe(3);
  expect(userCopy.companies[2]).toStrictEqual({id: 3, title: 'Google'})

})