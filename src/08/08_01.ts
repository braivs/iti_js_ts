export const usersObj = {
  '0': 'Dimich',
  '1': 'Natasha',
  '2': 'Valera',
  '3': 'Katya'
}

type UsersType = {
  [key: string]: {id: number, name: string}
}

export const users: UsersType = {
  '101': { id: 101, name: 'Dimych'},
  '3232312': { id: 3232312, name: 'Natasha'},
  '1212': { id: 1212, name: 'Valera'},
  '1': { id: 1, name:'Katya'}
}

//users[1] //быстро достать св-во с индексом 1. Актуально когда объект большой
// как добавлять:
let user = {id: 100500, name: 'Igor'}
users[user.id] = user; // так моментально
// как удалить
delete users[user.id] // удалиться моментально быстро
// чтобы обновить
users[user.id].name = 'Vitya';

export const usersArray = [
  { id: 101, name: 'Dimych'},
  { id: 3232312, name: 'Natasha'},
  { id: 1212, name: 'Valera'},
  { id: 1, name:'Katya'}
]

usersArray.find( u => u.id === 1) // тоже поиск свойства с ключом 1.
// если мутабельное добавление:
usersArray.push(user);

// ежели хотим добавить иммутабельно
//let usersCopy = [...usersArray.filter(), user] // так же сложность будет в зависимости от размера O(n)

// как удалить
// var usersArray = usersArray.filter(u => u.id !== user.id)