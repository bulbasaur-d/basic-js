const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    arr = [
        'Amelia',
        'Grace',
        'Lily',
        'Ruby',
    ];
    console.log(members);
    if (!Array.isArray(members)) {
        return false;
    }

    let s = [];
    let ss = [];

    for (let i = 0; i < members.length; i++) {

        if (typeof(members[i]) === 'string') {
            s.push(members[i]);


        }

    }
    s = s.map(el => el.trim());

    for (let j = 0; j < s.length; j++) {
        ss.push(s[j].charAt(0));
    }

    ss = ss.map(el => el.toUpperCase()).sort().join('')
    return console.log(ss);
};