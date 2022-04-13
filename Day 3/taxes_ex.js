let taxesOne = (salary) => {
    if (salary < 0 || (salary >= 0 && salary <= 14999)) {
        return 0;
    } else if (salary >= 15000 && salary <= 19999) {
        return 10;
    } else if (salary >= 20000 && salary <= 29999) {
        return 15;
    } else if (salary >= 30000 && salary <= 44999) {
        return 20;
    } else {
        return 25;
    }
}

let taxesTwo = (salary) => {
    if (salary < 0 || (salary >= 0 && salary <= 14999)) {
        return 0;
    } else if (salary >= 15000 && salary <= 19999) {
        return salary / 100 * 10;
    } else if (salary >= 20000 && salary <= 29999) {
        return salary / 100 * 15;
    } else if (salary >= 30000 && salary <= 44999) {
        return salary / 100 * 20;
    } else {
        return salary / 100 * 25;
    }
}

let taxesThree = (salary) => {
    return (salary / 100) * taxesOne(salary);
}

console.log(play(22, 22));
console.log(input(3, 1, 2));
console.log(`${taxesOne(34000)}%`)
console.log(taxesTwo(34000))
console.log(taxesThree(34000))