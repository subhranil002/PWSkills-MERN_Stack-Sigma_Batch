function convertToNumber(str) {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error();
        } else console.log(Number(str));
    } catch {
        console.log("Invalid Number");
    }
}

convertToNumber("123");
convertToNumber("abc");
