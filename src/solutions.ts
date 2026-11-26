
// Question_1
export function multiplyValue (
    value: number,
    multiplier?: number
): number {
    if(multiplier === undefined){
        return value * 2;
    } else {
        return value * multiplier;
    }
}


// Question_2
export function processInput(value: string | number | boolean): string | number {
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
export function formatCoordinate( coordinate: readonly [number, number, string]): string {
    const  latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// Question_4
export function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


// Question_5
export interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

export function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}



//Question_6
export function pluckValues<T, K extends keyof T> (
    items: T[],
    key: K
): T[K][] {
    return items.map((item) => item[key])
}



// Question_7
export class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}


export class Manager extends Employee{
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
}

}



// Question_8
export async function validateAgeAsync(age: number): Promise<string>{
    return new Promise((resolve, reject) => {
        if(age >= 18){
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000);
        }else {
            reject (new Error ("Access Denied: Must be 18 or older"));
        }
    })
}


