import { multiplyValue, processInput, formatCoordinate, concatenateArrays, getPopularCourses, type Course, pluckValues, Employee, Manager, validateAgeAsync} from "./solutions.js";



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

const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));


const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));


const manager = new Manager("Alice", 50000, "Engineering")

console.log(manager.getDetails());
console.log(manager.getRoleInfo());



validateAgeAsync(20)
.then((result) => {
    console.log(result);
})
.catch((error: Error) => {
    console.log(error.message)
});

validateAgeAsync(15).then((result) => {
    console.log(result);
})
.catch((error: Error) => {
    console.log(error.message);
});



