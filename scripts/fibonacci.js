export default () => {
    const number = prompt('Enter a number to get a list of Fibonacci numbers');
    let lastInt = 1;
    const arr = [];

    while (lastInt <= number) {
        if (arr.length) {
            arr.push(lastInt);
        } else {
            arr.push(lastInt, lastInt);
        }

        const indexLast = arr.length - 1;
        const indexBeforeLast = arr.length - 2;

        lastInt = arr[indexLast] + arr[indexBeforeLast];
    }

    arr.length && alert(`The list of Fibonacci numbers: ${arr}`);
}
