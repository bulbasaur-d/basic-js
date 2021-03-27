const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let s = [];
    /* let arrFlat = matrix.flat(); */
    let arrFlat = matrix.reduce((acc, curr) => acc.concat(curr), []);
    for (let i = 0; i < arrFlat.length; i++) {
        if (arrFlat[i] == '^^') {

            s.push(arrFlat[i]);
        }
    }
    return (s.length);

};