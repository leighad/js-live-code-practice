// Use the months array from index.js.
// Write a function that returns only the months ending in the letter 'y'.
const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function monthsEndingInY(arr) {
    yMonthsArr = [];
    arr.forEach(element => {
        let splitEl = element.split(',')
        console.log(splitEl)
        // console.log(toChars)
        // let toChars = splitEl.split(',')
        splitEl.forEach(el => {
         let toChars = el.split(',')
            // element.forEach(el => {
            console.log(toChars)
            // if (el.last == 'y') {
            //     console.log(element)
            // } else {
            //     console.log("Nope!!")
            // }
        })
        // if ((splitEl.at(-1)) == 'y') {
        //     yMonthsArr.push(element) 
        // }
    });
    // return yMonthsArr;
}

monthsEndingInY(monthsArray);