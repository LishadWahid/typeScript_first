import { multiplyValue, processInput, formatCoordinate, concatenateArrays, getPopularCourses } from "./solutions.js";
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
