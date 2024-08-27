export default () => {
    const contentContainer = document.getElementById('js-content-container');

    const addItemToList = (cycleName, arr = []) => {
        contentContainer && (contentContainer.insertAdjacentHTML('afterbegin', `<ul>${arr.map((el) =>
            `<li>${el} run with ${cycleName} cycle</li>`).join('')}</ul>`))
    }

    function outputWithForCycle(stopIndex) {
        const itemsArr = [];

        for (let i = 1; i <= stopIndex; i++) itemsArr.push(i);

        addItemToList('for', itemsArr);
    }

    function outputWithWhileCycle(stopIndex) {
        let i = 1;
        const itemsArr = [];

        while (i <= stopIndex) {
            itemsArr.push(i);
            i++;
        }

        addItemToList('while', itemsArr);
    }

    function outputWithDoWhileCycle(stopIndex) {
        let i = 1;
        const itemsArr = [];

        do {
            itemsArr.push(i);
            i++;

            if (i > stopIndex) break;
        } while (true)

        addItemToList('do while', itemsArr)
    }

    outputWithForCycle(5);
    outputWithWhileCycle(3);
    outputWithDoWhileCycle(2);
}
