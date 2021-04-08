import {ManType} from './Destructuring';

let props: ManType;

beforeEach(() => {
  props = {
    name: 'Dimych',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
      street: {
        title: 'Nezavisimosti street'
      }
    }
  }
})

test('', () => {

  //const age = props.age;
  //const lessons = props.lessons;
  let {age, lessons} = props;
  const {title} = props.address.street;

  const a = props.age;
  const l = props.lessons;

  expect(age).toBe(32);
  expect(lessons.length).toBe(2);

  expect(a).toBe(32);
  expect(l.length).toBe(2);
  expect(title).toBe('Nezavisimosti street');
})

test('', () => {

})