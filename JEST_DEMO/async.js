const fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 3000);
    });
}

module.exports = {
    fun
}