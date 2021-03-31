type CityType = {
  title: string
  countryTitle: string
}
type AdressType = {
  streetTitle: string
  city: CityType
}
type TechType = {
  id: number
  title: string
}
type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AdressType
  technologies: Array<TechType>
}

const student: StudentType = {
  id: 1,
  name: "Briws",
  age: 32,
  isActive: true,
  address: {
    streetTitle: "Temple Road, 42",
    city: {
      title: "Arambol",
      countryTitle: "India"
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "React"
    }
  ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
