// == 1 ==
type readingBooksType = {
  author: string,
  title: string
}
type myProfileType = {
  name: string
  surname: string
  countyVisited: number
  readingBooks: Array<readingBooksType>
}
let myProfile: myProfileType = {
  name: 'Briws',
  surname: 'Ustyugov',
  countyVisited: 3,
  readingBooks : [
    {
      author: 'Кастанеда',
      title: 'Магические пассы'
    },
    {
      author: 'Мантек Чиа',
      title: 'Совершенстование мужской сексуальной энергии'
    },
    {
      author: 'Флорида Донелл',
      title: 'Сон ведьмы'
    }

  ]
}

// == 2 ==
type itemType = {
  title: string,
  description: string
}
type myTableType = {
  generalItems: Array<itemType>
  studyItems: Array<itemType>
  magicItems: Array<itemType>
}

let myTable:myTableType = {
  generalItems: [
    {title: 'Лампа', description: 'Металлическая'},
    {title: 'Телевизор', description: '42 дюйма'},
    {title: 'Удлинитель', description: 'На 3 розетки'}
  ],
  studyItems: [
    {title: 'Тетрадь конспектная', description: 'По React, законченная'},
    {title: 'Тетрадь коспектная 2', description: 'JS и React, текущие'}
  ],
  magicItems: [
    {title: 'Чётки', description: 'Подаренные в Гоа'},
    {title: 'Дневник сновидений', description: 'Для картографии снов'}
  ]
}

// === 3 ===
type myKoreaImpressionsType = {
  visitedTowns: number
  bestTown: string
  bestImpressions: Array<string>
  negativeImpressions: Array<string>
}
let myKoreaImpressions: myKoreaImpressionsType = {
  visitedTowns: 5,
  bestTown: 'Сеул',
  bestImpressions: ['Чимчильбан', 'Транспорт'],
  negativeImpressions: ['Алкоголики', 'Отказали простутитки в городе, где работал']
}

// === 4 ===
type livingPlacesType = {
 title: string,
 mouthSpend: number
}
type goaImpressions = {
  moneySpend: number,
  mouthSpend: number,
  policeStop: number,
  bestImpressions: Array<string>
  livingPlaces: Array<livingPlacesType>,
  reasonWhyIReturn: string
}
var goaFirstSeasonImressions: goaImpressions = {
  moneySpend: 200000,
  mouthSpend: 6,
  policeStop: 4,
  bestImpressions: ['Вечеринки', 'Поездки на байке', 'Море', 'Озеро'],
  livingPlaces: [
    {title: 'Гостиница', mouthSpend: 0.25},
    {title: 'Хостел', mouthSpend: 1}
  ],
  reasonWhyIReturn: 'Захотел в Южную Корею'
}

// === 5 ===
var goaSecondSeasonImpressions: goaImpressions = {
  mouthSpend: 300000,
  moneySpend: 8,
  policeStop: 0,
  bestImpressions: ['Море', 'Церемонии'],
  livingPlaces: [
    {title: 'Арамболь дом', mouthSpend: 3},
    {title: 'Керим дом', mouthSpend: 2}
  ],
  reasonWhyIReturn: 'Сломал ногу'
}

// === 6 ===
type wallType = {
  isItClear: boolean,
  thingsOnIt: number
}
type myRoomType = {
  wallInFrontOfMe: wallType,
  wallBehindMe: wallType
}
var myRoom: myRoomType = {
  wallInFrontOfMe: {
    isItClear: false,
    thingsOnIt: 2
  },
  wallBehindMe: {
    isItClear: true,
    thingsOnIt: 0
  }
}

/// === 7 ===
type myBalconyType = {
  isItOpened: boolean,
  isItWarm: boolean,
  whatISeeFromIt: Array<string>
}
var myBalcony: myBalconyType = {
  isItOpened: false,
  isItWarm: false,
  whatISeeFromIt: ['Институт', 'Теплостанцию']
}

/// === 8 ====
type moviesType = {
  bestMovies: Array<string>
  negativeMovies: Array<string>
}
var movies:moviesType = {
  bestMovies: ['Секс Ангелов', 'Тригонометрия'],
  negativeMovies: ['Химера', 'Мечтатели']
}


/// === 9 ===
type whatIDoType = {
  id: number,
  title: string
}
type myMorningType = {
  wakeup: string,
  isIHappyAtMorning: boolean,
  whatIDo: Array<whatIDoType>
}
var myMorning:myMorningType = {
  wakeup: 'varios',
  isIHappyAtMorning: true,
  whatIDo: [
    {id: 1, title: 'Медитация'},
    {id: 2, title: 'Йога'},
    {id: 3, title: 'Каошики'}
    ]
}

// === 10 ===
type mySofaType = {
  whatOnIt: Array<string>,
  whatInside: Array<string>
}
var mySofa:mySofaType = {
  whatOnIt: ["2 большие подушки", "2 маленьких подушки"],
  whatInside: ['Постельное бельё', 'Подушки для сна']
}




