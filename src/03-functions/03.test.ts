import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Briws",
    age: 32,
    isActive: false,
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
})

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS");

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].title).toBeDefined();

})

test("student should be made active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);
})

test("does student lives in city?", () => {

  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Arambol");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
})