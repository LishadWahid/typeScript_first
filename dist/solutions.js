export function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
}
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
export function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
export function concatenateArrays(...arrays) {
    return arrays.flat();
}
export function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
export function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
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
