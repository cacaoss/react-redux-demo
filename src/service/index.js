const asycnCountAdd = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
}
const asyncCountMinus = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
}

export {asycnCountAdd, asyncCountMinus}