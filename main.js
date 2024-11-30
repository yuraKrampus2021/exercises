//1
function maskifyStr(str) {
    let out = ''

    if (str.length === 4) {
        return str;
    }

    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 4) {
            out += '#'
        } else {
            out += str[i];
        }
    }
    return out;
}

//2
function multiplyAll(numbers) {
    if (!numbers.length && numbers.length === undefined) {
        return [];
    }

    return function (num) {
        if (num === undefined) {
            return [];
        }

        const res = numbers.map(e => e * num);

        return res;
    };
}

//3
function isAwardEligible(attendance) {
    if (countOccurrences(attendance, 'A') > 1) {
        return false;
    }

    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === 'L' && attendance[i + 1] === 'L'
            && attendance[i + 2] === 'L') {
            return false;
        }
    }

    return true;
}

function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

//4
function detectCapital(word) {
    const copy = word.trim();

    if (copy === '') {
        return 'Enter a word here';
    }

    if (copy.split(' ').length > 1) {
        return 'Enter one word at a time';
    }

    if (copy === copy.toUpperCase()) {
        return true;
    }

    if (copy === copy.toLocaleLowerCase()) {
        return true;
    }

    const firstLeter = copy[0];
    const anotherPart = copy.slice(1);

    if (firstLeter === firstLeter.toUpperCase()
        && anotherPart === anotherPart.toLowerCase()
    ) {
        return true;
    }

    return false;
}

//5
function lengthOfLastWord(words) {
    const arr = words.split(' ');

    let maxLentg = 0;

    arr.forEach((e) => {
        if (e.length > maxLentg) {
            maxLentg = e.length;
        }
    });

    return maxLentg;
}

//6
function createList(santasList, childrenList) {
    const out = [];

    santasList.forEach(santa => {
        childrenList.forEach(child => {
            if (santa === child) {
                out.push(santa);
            }
        });
    });

    const unik = [...new Set(out)].sort();

    return unik;
}

//7
function createList(objs, name) {
    if (!objs.length) {
        return [];
    }

    const out = [];

    objs.forEach(obj => {
        if (name in obj) {
            out.push(obj[name]);
        } else {
            out.push(undefined);
        }
    });

    return out;
}

//8
function reverseChars(str, k) {
    if (k === str.length || k > str.length) {
        return str.split('').reverse().join('');
    }

    let out = '';

    for (let i = 0; i < str.length; i += (k * 2)) {
        out += rever(str.slice(i, i + k));
        out += str.slice(i + k, i + (k * 2));
    }

    return out;
}

function rever(chars) {
    return chars.split('').reverse().join('');
}

//9
function getTribonacciSequence(start, n) {
    if (n === 0) {
        return [];
    }

    if (n < start.length) {
        return start.slice(0, n);
    }

    const out = [];
    let num = null;

    start.forEach((e, indx) => {
        if (indx === start.length - 1) {
            out.push(e);

            for (let i = indx + 1; i < n; i++) {
                num = out.slice(out.length - 3).reduce((a, c) => a + c, 0);
                out.push(num);
            }
        }
        out.push(e);
    });

    return out.slice(0, out.length - 1);
}

//10
function countUnluckyDays(year) {
    let count = 0;

    if (year === 0) {
        return 1;
    }

    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);

        if (date.getDay() === 5) { // 5 означає п'ятниця
            count++;
        }
    }

    return count;
}

//11
function getHighestValue(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    let highestValue = 0;
    let currentSum = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (consonants.includes(char)) {
            const charValue = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

            currentSum += charValue;
            highestValue = Math.max(highestValue, currentSum);
        } else {
            currentSum = 0;
        }
    }

    return highestValue;
}

// 12
function extractProperty() {
    /**
     * @param {string} path
     *
     * @returns {string|undefined}
     */
    Object.prototype.extract = function extract(path) {
        const keys = path.split('.');
        let current = this;

        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return undefined;
            }
        }

        return current;
    };
}


//13
function makeDescOrder(num) {
    const str = num.toString().split('')
    const res = str.sort((n1, n2) => n2 - n1)

    return +res.join('')
}

//14
function findSingleNum(nums) {
    let res = 0

    for (const num of nums) {
        res = counterOfSymbols(nums, num)

        if (res === 1) {
            return num;
        }
    }
}

function counterOfSymbols(arr, symb) {
    return arr.join('').split(symb).length - 1;
}

//15
function adviseBefore(target, advice) {
    return function wrapper(...args) {
        const adviceResult = advice(...args);

        if (Array.isArray(adviceResult)) {
            return target(...adviceResult);
        } else {
            return target(...args);
        }
    };
}

//16


//17


//18


//19


//20

