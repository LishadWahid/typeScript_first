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

export function formatCoordinate( coordinate: readonly [number, number, string]): string {
    const  latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName}, Latitude: ${latitude}, Longitude: ${longitude}`;
}



export function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

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