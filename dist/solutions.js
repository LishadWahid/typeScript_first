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
