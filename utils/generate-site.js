const { fs } = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the Promis and send the error to the catch
            if (err) {
                reject(err);
                //return to make sure the promise doesn't execute the resolve() function as well
                return;
            }

            // resolve promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./utils/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'Stylesheet copied successfully'
            });
        });
    });
};

module.exports = { writeFile, copyFile };