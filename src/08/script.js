let user = {
  "name": 'Briws',
  "age": 34,
  "address": {
    "city": {
      "title": "Arambol"
    }
  }
}

let city = {};
city.title = 'Minsk';
city['citizenCount'] = 100;

let usersObj = { // объект похожий на массив
  '0': 'Dimich',
  '1': 'Natasha',
  '2': 'Valera',
  '3': 'Katya'
}
usersObj['table'] = 'brown';
usersObj['Привет как дела'] = 'Хорошо';

let users = {
  '0': 'Dimich',
  '1': 'Natasha',
  '2': 'Valera',
  '3': 'Katya'
}

users[{}] = 'hello'; // у users появится св-во [object Object] = 'hello'