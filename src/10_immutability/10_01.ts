export type UserType = {
  name: string
  hair: number
  address: { city: string, house?: number }
}
export type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: Array<string>
}

export type UserWithSkillsType = UserType & {
  skills: Array<string>
}

export type CompanyType = {
  id: number, title: string
}

export type WithCompaniesType = {
  companies: Array<CompanyType>
}



export function makeHairStyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power
  }
  //copy.hair = u.hair / power
  return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
  return {
    ...u,
    address: {
      ...u.address,
      city: city
    }
  }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
  return {
    ...u,
    address: {
      ...u.address,
      house: house
    }
  }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
  return {
    ...u,
    laptop: {
      ...u.laptop,
      title: laptop
    }
  }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
  return {
    ...u,
    books: [...u.books, newBook]
  }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(b => (b === oldBook) ? newBook : b)
})

export const updateSkill = (u: UserWithSkillsType,
                           oldSkill: string,
                           newSkill: string) => ({
  ...u,
  skills: u.skills.map(b => (b === oldSkill) ? newSkill : b)
})

export function removeBook(u: UserWithLaptopType & UserWithBooksType,
                           bookForDelete: string) {
  return {
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
  }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType,
                           newId: number,
                           newCompanyName: string
                           ) {
  const newCompany: CompanyType = {
    id: newId,
    title: newCompanyName
  }
  const copy = {
    ...u,
    companies: [...u.companies, newCompany]
  }
  return copy;
}

export const updateCompanyTitle = (user: WithCompaniesType,
                                   companyId: number,
                                   newTitle: string) => {
  const copy: WithCompaniesType = {
    ...user,
    companies: user.companies.map(c => c.id === companyId
      ? {...c, title: newTitle}
      : c)
  }
  return copy;
}





