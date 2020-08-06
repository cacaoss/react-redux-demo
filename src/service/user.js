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
        }, 2000);
    })
}

export {loginRequest}