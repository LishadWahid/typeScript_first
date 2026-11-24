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
    return `Location: ${locationName}, Latitude: ${latitude}, Longitude: ${longitude}`;
}
export function concatenateArrays(...arrays) {
    return arrays.flat();
}
export function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
