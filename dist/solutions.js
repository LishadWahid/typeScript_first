// Question_1
export function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
}
// Question_2
export function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
}
// Question_3
export function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// Question_4
export function concatenateArrays(...arrays) {
    return arrays.flat();
}
export function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
//Question_6
export function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
// Question_7
export class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
export class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Question_8
export async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}
