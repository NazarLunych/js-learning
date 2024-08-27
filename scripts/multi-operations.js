export default () => {
    const container = document.getElementById("js-learning-container");
    const operationAccordingArgsLength = {
        subtraction: 2,
        multiplication: 3,
        sum: 4
    }

    const outputError = () => console.error("Please provide several arguments for the function");

    const outputContent = (value) => container && (container.innerHTML += `<li>${value}</li>`)

    function multiOperations(...args) {
        if (!args.length) {
            outputError();
            return;
        }

        const {subtraction, multiplication, sum} = operationAccordingArgsLength;
        const result = args.reduce((acc, curVal) => {
            switch (args.length) {
                case subtraction:
                    return acc - curVal;

                case multiplication:
                    return acc * curVal;

                case sum:
                    return acc + curVal;

                default:
                    return 'The number of arguments can be from 2 to 4'
            }
        })


        outputContent(`Operation result: ${result}`);
    }

    function calculateAverage(...args) {
        if (!args.length) {
            outputError();
            return;
        }

        const sum = args.reduce((acc, curVal) => acc + curVal);
        const result = sum / args.length;

        outputContent(`Average: ${result}`)
    }

    function pow(x, y = 1) {
        outputContent(`Result of pow: ${Math.pow(x, y)}`);
    }

    function applyFunction(func, firstArgs) {
        return function (innerArgs) {
            return func(firstArgs, innerArgs);
        }
    }

    const pov2 = applyFunction(pow, 2);
    pov2(10);

    multiOperations(8, 3, 5, 5);
    calculateAverage(4, 6, 2, 6, 8, 5, 2);
}
