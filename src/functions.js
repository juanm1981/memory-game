const uniqueRandoms = [];
const numRandoms = 5;

function uniqueRandom() {

    if (!uniqueRandoms.length) {
        for (let i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    const index = Math.floor(Math.random() * uniqueRandoms.length);
    const val = uniqueRandoms[index];

    uniqueRandoms.splice(index, 1);

    return val;

}

export default uniqueRandom;