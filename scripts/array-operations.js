export default () => {
    const container = document.getElementById('js-learning-container');
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function outputData(result) {
        container && (container.insertAdjacentHTML('beforeend', `<li>${result}</li>`))
    }

    /* Point 1
    * (Удалить из массива [1,2,3,4,5,6,7,8,9] элементы с первого по третий, и вставить между третьим и четвертым, три двойки)
    */
    function removeAndInsertElements() {
        const startDeleteIndex = 0;
        const deleteCount = 3;
        const insertStartIndex = 3;
        const insertValue = [2, 2, 2];

        array.splice(startDeleteIndex, deleteCount);
        array.splice(insertStartIndex, 0, ...insertValue);

        outputData(`Remove and Insert elements result: ${array}`);
    }

    /*
    * Point 2 (Используя метод map создайте массив на основе предыдущено,
    * где каждый элемент будет возведен во вторую степень)
    *  */
    function squareArrayElements() {
        const result = array.map((el) => Math.pow(el, 2));

        outputData(`Square array elements result: ${result}`);
    }

    /*
    * Point 3
    * Написать функцию которая принимает 2 параметра - x y. Возращает масив от размером x на y,
    * заполненый случайными числами
    * */
    function generateRandomMatrix(x, y) {
        const array = [];

        new Array(x).fill(null).map(() => {
            const row = [];

            new Array(y).fill(null).map(() => row.push(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
            array.push(row);
        });

        console.log("Matrix with random numbers: ", array);
    }

    /*
    * Point 4
    * Написать функцию которая возвращаеи массив размером n на n у которо все значения равны 0
    * кроме значений по диагонали которые равны 1
    * */
    function generateIdentityMatrix(n) {
        const defaultNumber = 0;
        const placeholderNumber = 1;
        const resultArray = new Array(n).fill(null).map((_, index) => {
            const array = new Array(n).fill(defaultNumber);
            array[index] = placeholderNumber;

            return array;
        });

        console.log("Diagonal matrix results: ", resultArray);
    }

    /*
    * Point 5
    * Функция принимает цифровое значение и выводит большую и меньшую цифру в этом числе
    * */
    function getMinMaxDigits(number) {
        const arrayWithNumbers = number.toString().split('').map(Number);
        const minValue = Math.min(...arrayWithNumbers);
        const maxValue = Math.max(...arrayWithNumbers);

        outputData(`Max and min digits result: min number is ${minValue}; max number is ${maxValue}`);
    }

    /*
    * Point 6
    * Написать функцию которая примимает массив и число, и возвращает номер индекса ближайшего числа в массиве
    * */
    function getNumberIndex(arr, number) {
        const closestNumber = arr.reduce(function (prev, curr) {
            return (Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
        });
        const closestIndex = arr.findIndex((el) => el === closestNumber);

        outputData(`Index of the closest number: ${closestIndex}`)
    }

    /*
    * Point 7
    * Написать Функцию которая принимает число и возвращает true если цифры в числе повторяются и false если нет
    * */
    function hasRepeatedDigits(number) {
        const newArr = [];
        let isNumberRepeats = false;

        number.toString().split('').map((elNumber) => {
            const isNumberInArray = newArr.some((el) => el === elNumber);

            if (isNumberInArray) {
                isNumberRepeats = true;
                return;
            }

            newArr.push(elNumber);
        });

        outputData(`Are there repeated digits in number ${number}: ${isNumberRepeats}`);
    }

    /*
   * Point 8
   * Написать Функцию которая будет генерировать случайные числа в интервале [a;b] и заполнять
   * ими двумерный массив размером 10 на 10. В массиве необходимо найти номер строки
   * с минимальным элементом. Поменять строки массива местами, строку с минимальным элементом и первую строку массива.
   * Организовать удобный вывод на экран
   * */
    function generateAndProcessMatrix(startNum, finishNum) {
        // Magic numbers are used for testing
        const matrix = [];

        for (let i = 0; i < 10; i++) {
            const array = [];

            for (let j = 0; j < 10; j++) {
                const randomNumber = Math.floor(Math.random() * (finishNum - startNum) + startNum);

                array.push(randomNumber);
            }

            matrix.push(array);
        }

        const indexArrayWithMinNumber = matrix.findIndex((array) => {
            const minNumber = Math.min(...matrix.flat());

            return array.some((elem) => elem === minNumber)
        })

        matrix[0] = matrix.splice(indexArrayWithMinNumber, 1, matrix[0])[0];

        console.log(`The smallest number of matrix ${Math.min(...matrix.flat())} is in the first array in the matrix: `, matrix);
    }

    /*
  * Point 9
  * человек решил прогулятся по городу перед работой. Город разбит на кварталы.
  * Человек может идти на юг, север, запад и восток. У него е есть 90 минут.
  * Квартал проходится за 10 минут. Сможет ли человек вернуться за отведенное время?
  * Написать функцию которая принимает массив перемещений типа ['север', 'юг', 'запад', 'запад'] любой длины.
  * Ворзращает true или false.
  * */
    function canReturnInTime(directions) {
        let x = 0;
        let y = 0;
        const haveMinutes = 90;
        const minutesPerQuarter = 10;
        const minutesPerWalk = directions.length * minutesPerQuarter;

        directions.forEach((direction) => {
            switch (direction) {
                case "north":
                    y += 1;
                    break;
                case "south":
                    y -= 1;
                    break;
                case "east":
                    x += 1;
                    break;
                case "west":
                    x -= 1;
                    break;
            }
        })

        const minutesToReturn = (Math.abs(x) + Math.abs(y)) * minutesPerQuarter;
        const canReturnInTime = haveMinutes >= minutesPerWalk + minutesToReturn;

        outputData(`Can the man returns in time: ${canReturnInTime}`);
    }

    /*
 * Point 10
 * Реализовать сортировку массива и попытаться сделать её максимально оптимальной.
 * */
    function optimizedSort(array) {
        const sortedArray = [];
        const arrayCopy = [...array];

        while (arrayCopy.length > 0) {
            let minNumberIndex = 0;

            arrayCopy.forEach((_, index) => {
                if (arrayCopy[index] < arrayCopy[minNumberIndex]) {
                    minNumberIndex = index;
                }
            })

            sortedArray.push(arrayCopy.splice(minNumberIndex, 1)[0]);
        }

        console.log("Sorted array: ", sortedArray);
    }

    alert("Please open console to see other results");

    removeAndInsertElements();
    squareArrayElements();
    generateRandomMatrix(3, 3);
    generateIdentityMatrix(6);
    getMinMaxDigits(32139);
    getNumberIndex([1, 2, 3, 4, 10], 6);
    hasRepeatedDigits(12327);
    generateAndProcessMatrix(1, 230);
    canReturnInTime(["north", "north", "south", "west"]);
    optimizedSort([5, 3, 8, 1, 3, 19, 18, 1, 2, 27, 8]);
}
