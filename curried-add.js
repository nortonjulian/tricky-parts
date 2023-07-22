function curriedAdd(total) {
    if (total === undefined) {
        return 0;
    }

    if (typeof total !== 'number') {
        throw new Error('Invalid argument. Please provide a number')
    }

    const addNextNum = function (nextNum) {
        if (typeof nextNum === 'number') {
            return curriedAdd(total + nextNum);
        } else {
            return total;
        }
    }

    return addNextNum;
}

module.exports = { curriedAdd };
