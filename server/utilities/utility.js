module.exports.reels = {
    "0": ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
    "1": ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
    "2": ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
}


module.exports.totalReelTry = 3;
module.exports.eachSpinCost =1;

const rules = {
    "cherry-cherry-cherry": 50,
    "cherry-cherry": 30,
    "apple-apple-apple": 20,
    "apple-apple": 10,
    "banana-banana-banana": 15,
    "banana-banana": 5,
    "lemon-lemon-lemon": 3
}

module.exports.getRandomNumber = () => {
    return Math.floor(Math.random() * 7);
}

module.exports.getUserPrize = (value) => {
    let wonPrize = 0;
    Object.keys(rules).map((prize) => {

        if (value.includes(prize) && (value.indexOf(prize) === 0)) {
            wonPrize=rules[prize]
        }
    })

    return wonPrize;
}
