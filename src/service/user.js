const loginRequest = (userInfo) => {
    const responseUserInfo = {
        id: 1,
        name: "ZZH"
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userInfo.name === responseUserInfo.name) {
                resolve(responseUserInfo)
            } else {
                reject("用户名错误")
            }
        }, 1000);
    })
}
const getUserScroe = (userInfo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({score: 80});
        }, 1000);
    })
}

export {loginRequest, getUserScroe}