const numbers = [1, 2, 3, 4, 5];

const extractElements = (numbers) => {
    const [first, second, ...rest] = numbers;
    const last = rest.pop();
    return [first, second, last];
};

const extractedElements = extractElements(numbers);
console.log(extractedElements);
