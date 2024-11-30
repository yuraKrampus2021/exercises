// 1
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

// 2
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
