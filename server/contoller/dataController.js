const registrationDataKeys = ['name', 'email', 'password'];

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

module.exports.registrationDataControl = (user) => {
    let isUser = true;

    registrationDataKeys.forEach((item) => {
        if (user[item] === undefined || user[item] === null) {
            isUser = false;
        }

        if (user[item] === undefined && user[item] === '') {
            isUser = false;
        }
    })

    if (!isUser) { return false };

    isUser = regExp.test(user.email)

    return isUser;
}

