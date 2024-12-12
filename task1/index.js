const calculateAreaExpression = function(width, height) {
    return width * height;
};

const areaExpression = calculateAreaExpression(5, 10);
console.log(`Function Expression: ${areaExpression}`);

// Функція як стрілкова функція (arrow function)
const calculateAreaArrow = (width, height) => width * height;

const areaArrow = calculateAreaArrow(5, 10);
console.log(`Arrow Function: ${areaArrow}`);